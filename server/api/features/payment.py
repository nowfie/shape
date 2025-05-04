import razorpay
import json
import logging
from django.conf import settings
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.shortcuts import render, get_object_or_404
from api.models import Payment, MembershipPlan, UserDetail

# Initialize Razorpay client
razorpay_client = razorpay.Client(auth=(settings.RAZOR_KEY_ID, settings.RAZOR_KEY_SECRET))

# Setup Logging
logger = logging.getLogger(__name__)

# Serve Frontend Payment Page
def payment_page(request):
    membership_plans = MembershipPlan.objects.all()
    users= UserDetail.objects.all()
    return render(request, "payment.html", {"razorpay_key": settings.RAZOR_KEY_ID, "membership_plans": membership_plans, "users":users})

# Create Order API

class CreateOrderAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        try:
            user_id = request.data.get("user_id")  # Get user_id from request
            membership_id = request.data.get("membership_id")
            

            if not user_id or not membership_id:
                return Response({"error": "User and Membership are required"}, status=status.HTTP_400_BAD_REQUEST)

            user = get_object_or_404(UserDetail, id=user_id)
            membership = get_object_or_404(MembershipPlan, id=membership_id)

            amount = membership.price
            if not amount or int(amount) <= 0:
                return Response({"error": "Invalid amount"}, status=status.HTTP_400_BAD_REQUEST)

            amount_paise = int(amount * 100)  # Convert INR to paisa
            currency = "INR"

            order_data = {
                "amount": amount_paise,
                "currency": currency,
                "payment_capture": 1,
                "notes": {"membership_id": membership.id, "user_id": user.id}
            }

            order = razorpay_client.order.create(order_data)
            logger.info(f"Razorpay Order Created: {order}")

            # Save Payment with User
            payment = Payment.objects.create(
                user=user,  
                membership=membership,
                payment_method='card',
                transaction_id=order['id'],
                status='pending'
            )

            return Response(order, status=status.HTTP_201_CREATED)

        except Exception as e:
            logger.error(f"Error in CreateOrderAPIView: {str(e)}")
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(["POST"])
def verify_payment(request):
    try:
        data = request.data
        razorpay_payment_id = data.get("razorpay_payment_id")
        razorpay_order_id = data.get("razorpay_order_id")
        razorpay_signature = data.get("razorpay_signature")

        if not (razorpay_payment_id and razorpay_order_id and razorpay_signature):
            return JsonResponse({"error": "Missing payment details"}, status=400)

        params_dict = {
            "razorpay_order_id": razorpay_order_id,
            "razorpay_payment_id": razorpay_payment_id,
            "razorpay_signature": razorpay_signature
        }

        # Verify Razorpay Signature
        try:
            result = razorpay_client.utility.verify_payment_signature(params_dict)
        except razorpay.errors.SignatureVerificationError:
            logger.error(f"Payment verification failed: {params_dict}")
            # Update Payment Status to Failed
            payment = get_object_or_404(Payment, transaction_id=razorpay_order_id)
            payment.status = "failed"
            payment.save()
            return JsonResponse({"error": "Payment verification failed"}, status=400)

        logger.info(f"Payment verified: {razorpay_payment_id}")

        # Fetch Payment Details from Razorpay
        payment_info = razorpay_client.payment.fetch(razorpay_payment_id)

        # Update Payment in Database
        payment = get_object_or_404(Payment, transaction_id=razorpay_order_id)
        payment.status = "completed"
        payment.transaction_id = razorpay_payment_id
        payment.payment_method = payment_info.get("method", "unknown")
        payment.save()

        return JsonResponse({"message": "Payment verified successfully!"}, status=200)

    except Exception as e:
        logger.error(f"Error in verify_payment: {str(e)}")  # Log error
        return JsonResponse({"error": str(e)}, status=400)
