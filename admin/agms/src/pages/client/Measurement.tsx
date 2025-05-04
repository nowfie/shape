import { GiChampions } from "react-icons/gi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { FaClock } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import CustomTooltip from "../../components/CustomTooltip";

const Measurement = (): JSX.Element => {
  const data = [
    { date: "01-04-2025", weight: 65 },
    { date: "15-04-2025", weight: 66 },
    { date: "01-05-2025", weight: 66.5 },
  ];

  const goalWeight = 70;

  const MeasureBox = () => {
    return (
      <div className="flex flex-col justify-between xl:flex-row gap-5 p-5 rounded-3xl extraground w-full">
        {/* Left */}
        <div className="xl:w-[40%] space-y-5">
          {/* Title */}
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">
              Weight <span className="text-quaternary ml-2">66 kg</span>
              <span className=" bg-secondary text px-3 ml-4 py-1 rounded-lg text-sm inline-flex items-center gap-1">
                <BiFoodMenu /> {goalWeight} kg
              </span>
            </div>
            <div className="text-sm text-gray-500 font-medium">
              lbs / <span className="text-primary">kg</span>
            </div>
          </div>

          {/* Input box */}
          <div className="bg-gray-100 p-5 rounded-2xl flex items-center justify-between">
            <div className="flex items-center text-2xl font-bold text-gray-800">
              66 <span className="text-gray-400 text-xl ml-1">kg</span>
            </div>
            <button className="bg-primary text-white font-semibold px-5 py-2 rounded-xl">
              Add
            </button>
          </div>

          {/* View history */}
          <button className="w-full bg-gray-100 py-4 rounded-2xl flex items-center justify-center gap-2 text-gray-700 font-semibold hover:bg-gray-200 transition">
            <FaClock />
            View history
          </button>
        </div>

        {/* Right */}
        <div className="xl:w-[56%] space-y-5">
          <div className="flex justify-between items-center">
            <h4 className="text-sm paragraph font-semibold">
              YOUR WEIGHT (IN KG) OVER TIME
            </h4>
            <div className="flex items-center gap-2">

              <select className=" bg-primary rounded-xl capitalize font-semibold text px-4 py-1 text-sm">
                <option>month</option>
                <option>week</option>
              </select>
            </div>
          </div>

          {/* Chart */}
          <div className="h-[350px] rounded-3xl bg-gray-50 p-5">
            <ResponsiveContainer width="103%" className="relative -left-7" height="100%">
                <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" /> {/* Dotted grid lines */}
                <XAxis 
                    dataKey="date" 
                    axisLine={{ stroke: '#a3a2a3' }}
                    tick={{ 
                        fontSize: 12, 
                        fontWeight: 600, 
                        fill: '#a3a2a3',  // text-slate-700
                        fontFamily: 'Inter, sans-serif' ,
                        dy: 15,
                      }}
                    
                />
                <YAxis 
                    domain={[64, 70]} 
                    axisLine={{ stroke: '#a3a2a3' }}
                    tick={{ 
                        fontSize: 12, 
                        fontWeight: 600, 
                        fill: '#a3a2a3',  // text-slate-700
                        fontFamily: 'Inter, sans-serif' ,
                        dx: -10,
                      }}
                />
                <Tooltip content={<CustomTooltip/>} />
                <Legend
                    verticalAlign="top"
                    content={({ payload }) => (
                        <div className="flex justify-center gap-6 mb-6 text-sm">
                            {payload?.map((entry, index) => (
                                <div key={`item-${index}`} className="flex items-center gap-2">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: entry.color }}
                                />
                                <span className="text font-medium capitalize">{entry.value}</span>
                                </div>
                            ))}
                        </div>
                    )}
                    />

                <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#C1E671"
                    strokeWidth={3}
                    dot={{ r: 6 }}
                />
                <Line
                    type="monotone"
                    dataKey={() => goalWeight}
                    stroke="#FFA2A0"
                    strokeDasharray="5 5"
                    name="Goal"
                />
                </LineChart>
            </ResponsiveContainer>
        </div>


        </div>
      </div>
    );
  };

  return (
    <main className="p-5">
      <div className=" space-y-5">
        <MeasureBox />
        <MeasureBox />

        <MeasureBox />

      </div>
    </main>
  );
};

export default Measurement;
