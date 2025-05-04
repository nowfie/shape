import { TooltipProps } from 'recharts';

const CustomTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <div className="extraground p-4 rounded-lg shadow-lg border border-gray-200 text-sm space-y-1">
        {/* <p className="font-semibold text-gray-800">Date: {label}</p> */}
        <p className="paragraph text-xs flex justify-between gap-5">Weight: <strong>{payload[0].value} kg</strong></p>
        <p className="paragraph text-xs flex justify-between gap-5">Goal: <strong>{payload[1].value} kg</strong></p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip 