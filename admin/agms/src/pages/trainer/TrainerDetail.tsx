import { BiCalendar, BiMailSend } from "react-icons/bi";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Calendar from "../../components/Calender";
import { FaClock, FaUsers } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";


const TrainerDetail = (): JSX.Element => {

  const ActivitySection = () => {
    const activityData = [
      { day: "5 Aug", hours: 2 },
      { day: "6 Aug", hours: 2.5 },
      { day: "7 Aug", hours: 3.33 },
      { day: "8 Aug", hours: 2.2 },
      { day: "9 Aug", hours: 2.8 },
      { day: "10 Aug", hours: 3.9 },
      { day: "11 Aug", hours: 2.6 },
    ];
  
    return (
      <section className="p-5 rounded-3xl extraground">
        <div className="flex justify-between items-center mb-7">
          <h2 className="heading">Training Activity</h2>
          <div className="bg-primary text px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
            <span><BiCalendar/></span> <span>1 - 8 August 2028</span>
          </div>
        </div>
        <div className="h-[250px] relative">
          <ResponsiveContainer width="100%" className={' relative -left-2'} height="100%">
            <AreaChart data={activityData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#c3e6fd" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#c3e6fd" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" padding={{ left: 20, right: 20 }} tick={{ fontSize: 12, dy:10 }}  axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12,dx:-10 }} axisLine={false} tickFormatter={(value) => `${value} Hrs`} tickLine={false} domain={[0, 4]} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  border: "none",
                }}
                formatter={(value: number) => [`${value} Hours`, ""]}
                labelFormatter={(label: string) => `Day: ${label}`}
              />
              <Area
                type="monotone"
                dataKey="hours"
                stroke="#3B82F6"
                fillOpacity={1}
                fill="url(#colorHours)"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    );
  };



  const ScheduleSection = () =>{

    const schedule = [
      {
        date: "Sun, 2 Aug",
        time: "9:00 AM",
        title: "Core Stability",
        duration: "45 minutes",
        participants: 10,
      },
      {
        date: "Mon, 3 Aug",
        time: "7:00 AM",
        title: "Strength & Conditioning",
        duration: "60 minutes",
        participants: 15,
      },
      {
        date: "Wed, 5 Aug",
        time: "6:00 PM",
        title: "Functional Strength Training",
        duration: "60 minutes",
        participants: 12,
      },
      {
        date: "Fri, 7 Aug",
        time: "8:00 AM",
        title: "Full-Body Strength",
        duration: "60 minutes",
        participants: 18,
      },
    ];

    return(
      <section>
        <div className="flex p-5 rounded-3xl extraground flex-col xl:flex-row gap-5">
          <div className="xl:w-1/2 calender">
            <div className=" rounded-3xl background p-5">
              <Calendar/>
            </div>
          </div>
          <div className=" xl:w-1/2 space-y-7">
              <div className="flex justify-between items-center">
                <h3 className="heading">Jordan's Schedule</h3>
                <div className="bg-primary text px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <span><BiCalendar/></span> <span>this week</span>
                </div>
              </div>

              <div className=" space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="border-b gap-4 pb-3 flex last:pb-0 last:border-b-0 border-paragraph/20">
                    <div className="xl:w-[20%] border-r space-y-1 border-paragraph/20 flex flex-col paragraph text-xs">
                        <h3>{item.date}</h3>
                        <h3>{item.time}</h3>
                    </div>
                    <div className="xl:w-[50%]">
                      <h4 className="text-base font-semibold text">
                        {item.title}
                      </h4>
                    </div>
                    <div className=" xl:w-[30%] gap-4 paragraph space-y-1 text-xs">
                      <span className="flex items-center gap-1">
                        <FaClock className="text-[12px]" /> {item.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUsers className="text-[12px]" /> {item.participants} participants
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
    )
  }

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
        <section className="">
          <div className="flex bg-tertiary rounded-3xl p-4 flex-col lg:flex-row gap-7 justify-center items-center">
            {MacroData.map((item,index)=>(
              <NutriBox item={item} key={index}/>
            ))}
          </div>
        </section>
      )
    }

    const ContactSection = () =>{

      const ContactBox = () =>{
        return(
          <div className="flex gap-2">
            <span className=" bg-primary p-3 rounded-xl text"><BiMailSend/></span>
            <div className="">
              <h4 className=" paragraph text-xs">email</h4>
              <h2 className="text text-sm font-medium">traienrname@shape.com</h2>
            </div>
          </div>
        )
      }

      return(
        <div className="">
          <h2 className="heading mb-4">contact</h2>
          <div className=" space-y-3">
            {Array.from({length:3}).map((_,index)=>(
              <ContactBox key={index}/>
            ))}
          </div>
        </div>
      )
    }
  

    const SpecialSection = () =>{

      const SpecialBox = () =>{
        return(
          <div className="flex gap-2">
            <span className=" bg-secondary p-3 rounded-xl text"><BiMailSend/></span>
            <div className="">
              <h2 className="text text-sm font-medium">traienrname@shape.com</h2>
              <h4 className=" paragraph text-xs">email</h4>
            </div>
          </div>
        )
      }

      return(
        <div className="">
          <h2 className="heading mb-4">Special</h2>
          <div className=" space-y-3">
            {Array.from({length:2}).map((_,index)=>(
              <SpecialBox key={index}/>
            ))}
          </div>
        </div>
      )
    }

    return(
      <section>
        <div className="extraground p-5 rounded-3xl">
          <div className="flex justify-between items-center mb-5">
            <h2 className="heading">profile</h2>
            <button className="background px-3 py-1 rounded-3xl">
              <BsThreeDots/>
            </button>
          </div>
          <div className="flex flex-col items-center mb-5">
            <img src="/food.jpg" className="w-[100px] rounded-3xl mb-3 h-[100px] object-cover" alt="" />
            <h1 className="text font-semibold mb-0">trainer name</h1>
            <h4 className="paragraph text-xs">available</h4>
          </div>
          <div className="space-y-5">
          <MacroNutrition/>
          <SpecialSection/>
          <ContactSection/>
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <main>
        <div className="main flex flex-col xl:flex-row gap-3">
            <div className="xl:w-[78%] space-y-3">
              <ActivitySection/>
              <ScheduleSection/>
            </div>
            <div className="xl:w-[22%] space-y-3">
              <ProfileSection/>
            </div>
          </div>
    </main>
  )
}

export default TrainerDetail