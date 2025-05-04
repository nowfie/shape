from django.contrib import admin
from . import models
import nested_admin

class AddRepInline(nested_admin.NestedTabularInline):
    model = models.AddRep
    extra = 1
    
class AddWorkoutInline(nested_admin.NestedTabularInline):
    model = models.AddWorkoutPlan
    inlines = [AddRepInline]
    extra = 1
    fields= ['workout']
    
class MorningSessionInline(nested_admin.NestedTabularInline):
    model = models.MorningSession
    inlines = [AddWorkoutInline]
    extra = 1
    
class EveningSessionInline(nested_admin.NestedTabularInline):
    model = models.EveningSession
    inlines = [AddWorkoutInline]
    extra = 1
    
class WorkoutPlanAdmin(nested_admin.NestedModelAdmin):
    def get_inline_instances(self,request,obj=None):
        if obj is None:
            return []
        inlines = []
        if obj.session == 'morning':
            inlines = [MorningSessionInline]
        elif obj.session == 'evening':
            inlines = [EveningSessionInline]
        else:
            inlines = [MorningSessionInline, EveningSessionInline]
            
        return [inline(self.model, self.admin_site) for inline in inlines]
        
    
admin.site.register(models.WorkoutPlan, WorkoutPlanAdmin) 
admin.site.register(models.MembershipPlan)
admin.site.register(models.Trainer)
admin.site.register(models.Equipment)
admin.site.register(models.Attendance)
admin.site.register(models.BodyIndex)
admin.site.register(models.UserDetail)
admin.site.register(models.Measurement)
admin.site.register(models.Payment)
admin.site.register(models.Workout)
admin.site.register(models.DietPlan)