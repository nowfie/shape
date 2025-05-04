import { BiFoodMenu } from "react-icons/bi"
import { GiFoodChain } from "react-icons/gi"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import Calendar from "../../components/Calender";
import { BsThreeDots } from "react-icons/bs";
import FoodBox from "../../components/food/FoodBox";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaFire } from "react-icons/fa6";


const Client = (): JSX.Element => {

  const mainInfoData = [
    // {
    //   name:'calories',
    //   value:342,
    //   subValue:299,
    //   icon: BiFoodMenu,
    //   bg_color: 'bg-secondary',
    // },
    {
      name:'bmi',
      value:342,
      subValue:331,
      icon: BiFoodMenu,
      bg_color: 'bg-primary',
    },
    {
      name:'bmr',
      value:342,
      subValue:299,
      icon: BiFoodMenu,
      bg_color: 'bg-tertiary',
    },
  ]
  
  const MainInfo = () =>{


    

    const InfoBox = ({ item }) => {
      const chartData = [
        { name: 'Mon', value: 100 },
        { name: 'Tue', value: 120 },
        { name: 'Wed', value: 110 },
        { name: 'Thu', value: 150 },
        { name: 'Fri', value: 170 },
        { name: 'Sat', value: 130 },
        { name: 'Sun', value: 180 },
      ];
    
      const renderChart = () => {
        if (item.name === 'calories') {
          const percentage = Math.min((item.subValue / item.value) * 100, 100);
          const radius = 40;
          const circumference = Math.PI * radius;
          const offset = circumference - (circumference * percentage) / 100;
      
          return (
            <div className="flex justify-center mb-9 items-center h-[100px]">
              <svg  viewBox="0 0 100 50">
                <path
                  d="M10,50 A40,40 0 0,1 90,50"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="10"
                />
                <path
                  d="M10,50 A40,40 0 0,1 90,50"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                />
                <text
                  x="50"
                  y="35"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#333"
                  fontWeight="bold"
                >
                  {item.subValue} kcal
                </text>
              </svg>
            </div>
          );
        } else {
          return (
            <div className="graph w-full h-[100px] my-5">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#C1E671"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          );
        }
      };
      
    
      return (
        <div className="extraground rounded-3xl p-5">
          <h2 className="heading flex items-center gap-2">
            <span className={`${item.bg_color} p-2 rounded-xl text`}>
              <item.icon />
            </span>
            {item.name}
          </h2>
    
          <div className="my-5">
          {renderChart()}
          </div>
    
          <div className="space-y-1">
            <h2 className="text text-2xl font-semibold">
              {item.value} <span className="text-sm font-normal">kcal</span>
            </h2>
            <h3 className=" text-xs paragraph font-medium">today : {item.subValue} kcal</h3>
          </div>
        </div>
      );
    };
    

    return(
      <section>
        <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
          {mainInfoData.map((item,index)=>(
            <InfoBox key={index} item={item}/>
          ))}
        </div>
      </section>
    )
  }

  const ActivitySection = () => {
    const activityData = [
      { day: "Mon", intake: 2200, burn: 1800 },
      { day: "Tue", intake: 2100, burn: 1700 },
      { day: "Wed", intake: 2000, burn: 1600 },
      { day: "Thu", intake: 2300, burn: 1900 },
      { day: "Fri", intake: 2500, burn: 2000 },
      { day: "Sat", intake: 2400, burn: 1950 },
      { day: "Sun", intake: 2600, burn: 2100 },
    ];
  
    return (
      <section className="p-5 rounded-3xl extraground ">
        <h2 className="heading mb-6">Weekly Activity</h2>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activityData} barGap={8}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis hide />
              <Tooltip />
              <Bar
                dataKey="intake"
                name="Calorie Intake"
                fill="#CDE9FE" // Indigo
                radius={[10, 10, 0, 0]}
                barSize={30}
              />
              <Bar
                dataKey="burn"
                name="Calorie Burn"
                fill="#F9F189" // Emerald
                radius={[10, 10, 0, 0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    );
  };


const ProgressSection = () => {
  const data = [
    {
      name: 'Cardio Training',
      value: 85,
      fill: '#C1E671', // blue
    },
    {
      name: 'Strength Training',
      value: 75,
      fill: '#F9F189', // yellow
    },
    {
      name: 'Flexibility Training',
      value: 65,
      fill: '#CDE9FE', // green
    },
  ];

  const legendStyle = {
    top: 0,
    left: 0,
    lineHeight: '24px',
  };

  return (
    <section className="p-5 rounded-3xl extraground">
      <div className="flex justify-between items-center mb-4">
        <h2 className="heading">Progress</h2>
        {/* <span className="text-xs bg-green-100 text-green-700 px-4 py-2 rounded-2xl">This Week</span> */}
        <select className="text-xs bg-primary text px-4 py-2 rounded-2xl capitalize font-semibold" name="" id="">
          <option value="">this week</option>
          <option value="">this week</option>
          <option value="">this week</option>
        </select>
      </div>
      <div className="">
        <h4 className="text font-semibold text-3xl">74 %</h4>
        <h6 className="paragraph text-xs">goal completion</h6>
      </div>

      <div className="flex justify-center -my-6">
        <RadialBarChart
          width={300}
          height={300}
          innerRadius="30%"
          outerRadius="80%"
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="value"
          />
        </RadialBarChart>
      </div>

      <div className="mt-4 space-y-3">
        {data.map((item, idx) => (
          <div key={idx} className="">
            <div  className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                <span className="font-semibold text">{item.name}</span>
              </div>
              <span className="text font-semibold">{item.value}%</span>
            </div>
            <div className="">
              <p className="paragraph ml-5 mt-1 text-xs">5/6 sets of HIIT session</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProfileSection = () =>{

  const MacroNutrition = () =>{
    const MacroData = [
      {
        name: 'calories',
        value: 290,
        bg_color: 'bg-primary',
      },
      {
        name: 'carb',
        value: 290,
        bg_color: 'bg-[#FFCB66]',
      },
      {
        name: 'protein',
        value: 290,
        bg_color: 'bg-[#FFA157]', 
      },
    ];
    const NutriBox =({item})=>{
      return(
        <div className="">
          <h2 className=" paragraph text-xs text-center ">weight</h2>
          <div className={` rounded-2xl flex items-center gap-1`}>
            <h2 className="text-black  text-center font-semibold">{item.value}</h2>
            <h4 className="text-black text-xs text-center">kg</h4>
          </div>
        </div>
      )
    }
    return(
      <section>
        <div className="flex bg-tertiary/50 rounded-3xl p-4 flex-col lg:flex-row gap-7 justify-center items-center">
          {MacroData.map((item,index)=>(
            <NutriBox item={item} key={index}/>
          ))}
        </div>
      </section>
    )
  }

  return(
    <section>
      <div className="extraground p-5 rounded-3xl">
        <h2 className="heading">profile</h2>
        <div className="flex my-5 justify-center items-center gap-3">
          <img src="/food.jpg" className=" rounded-full object-cover w-[50px] h-[50px]" alt="" />
          <div className="">
            <h3 className=" text font-semibold">mohammed nowfal</h3>
            <h5 className="paragraph text-xs">body building</h5>
          </div>
        </div>
        <MacroNutrition/>
        <div className="calender my-5">
          <Calendar/>
        </div>
        <div className="my-5">
          <WorkoutList/>
        </div>
      </div>
    </section>
  )
}

const WorkoutList = () =>{
  
  const Activity = () =>{
    return(
      <div className=" flex justify-between border-b pb-3 border-paragraph/20">
        <div className="">
          <h2 className="heading text-sm mb-1">morning cardio</h2>
          <h4 className="paragraph text-xs">high intensity</h4>
        </div>
        <button className=" p-2 background rounded-2xl">
        <BsThreeDots/>
        </button>
      </div>
    )
  }
  return(
    <section>
      <div className="">
        <h2 className="heading mb-5">today activity</h2>
        <div className=" space-y-3">
        <Activity/>
        <Activity/>
        </div>

      </div>
    </section>
  )
}


const FoodSection = () =>{
  const FoodBox = () =>{
    return(
      <div className=" p-3 rounded-2xl extraground">
        <div className="flex gap-4">
          <div className="  w-[40%] relative">
            <img src="/food.jpg" className=" h-full w-full object-cover rounded-2xl" alt="" />
          </div>
          <div className="">
            <h4 className=" bg-tertiary text rounded-lg text-[10px] px-2 w-fit py-1 mb-2">breakfast</h4>
            <h1 className="text font-semibold text-sm mb-2">veg biriyani</h1>
            <h3 className="paragraph text-[11px] flex items-center gap-2"> <span><SiLevelsdotfyi/></span> medium</h3>
            <h3 className="paragraph text-[11px] flex items-center gap-2"> <span><FaFire/></span> 1800 kcal</h3>
          </div>
        </div>
        <div className="my-3 p-[0.5px] bg-paragraph/20"/>
        <p className="paragraph text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    )
  }
  return(
    <section>
      <div className="">
        <h2 className="heading mb-3">today meals</h2>
        <div className=" space-y-3">
          {Array.from({length:5}).map((_,index)=>(
            <FoodBox key={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}
  return (
    <div className="">
       <div className="main flex flex-col xl:flex-row gap-3">
            <div className="xl:w-[50%] space-y-3">
              <MainInfo/>
              <ActivitySection/>
            </div>
            <div className="xl:w-[25%] space-y-3">
              <ProgressSection/>
              <FoodSection/>
            </div>
            <div className="xl:w-[25%] space-y-3">
              <ProfileSection/>
            </div>
          </div>
    </div>
  )
}

export default Client