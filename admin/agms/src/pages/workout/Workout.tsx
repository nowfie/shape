import { BiFoodMenu } from "react-icons/bi"
import { BsBarChartSteps, BsDot } from "react-icons/bs"
import { FaRegClock } from "react-icons/fa"
import { HiHand } from "react-icons/hi"
import { LuHeartPulse } from "react-icons/lu"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Workout = (): JSX.Element => {

  const DetailSection = () =>{

     const gridData = [
            {
              bg_color:'bg-secondary',  
              name:'dificulty',
                value:'medium',
                icon:LuHeartPulse
            },
            {
              bg_color:'bg-tertiary',  
              name:'healthy',
                value:'moderate',
                icon:LuHeartPulse
            },
            {
              bg_color:'bg-primary',  
              name:'duration',
                value:'moderate',
                icon:FaRegClock
            },
            {
              bg_color:'bg-quaternary',  
              name:'calories',
                value:'129 kcal',
                icon:BsBarChartSteps
            },
            {
              bg_color:'bg-quinary',  
              name:'duration',
                value:'10 minutes',
                icon:FaRegClock
            },
        ]
    const Equipment = () =>{
      return(
          <div className=" space-y-4">
            <h2 className="heading">equipment</h2>
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-3">
              {Array.from({length:6}).map((_,index)=>(
                <h4 key={index} className="flex  text items-center gap-3">
                  <span className="bg-tertiary rounded-3xl text-2xl text"><BsDot/></span>
                  dumbell
                </h4>
              ))}
            </div>
          </div>
      )
    }

    const Benifit = () =>{
      return(
          <div className=" space-y-4">
            <h2 className="heading">benifits</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {Array.from({length:6}).map((_,index)=>(
                <p key={index} className="flex paragraph  gap-3">
                  <span className="bg-tertiary h-fit rounded-3xl text-2xl text"><BsDot/></span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </p>
              ))}
            </div>
          </div>
      )
    }

    const AbstractSection = () =>{
      const AbstractBox = ({item}) =>{
        return(
          <div className="flex gap-2 items-center">
                    <span className={`${item.bg_color} p-4 rounded-xl text`}><item.icon/></span>
                    <div className=" space-y-1">
                        <h4 className="paragraph text-xs">{item.name}</h4>
                        <h2 className=" text font-semibold">{item.value}</h2>
                    </div>
                </div>
        )
      }

      return(
        <section className="!mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {gridData.map((item,index)=>(
              <AbstractBox item={item} key={index}/>
            ))}
          </div>
        </section>
      )
    }

    return(
      <section>
        <div className="extraground space-y-3 p-5 rounded-3xl">
          <div className="head flex flex-col lg:flex-row justify-between ">
            <div className="">
              <h2 className="heading text-2xl mb-3">barbell biceps curl</h2>
              <h4 className="paragraph ">chest</h4>
            </div>
            {/* <div className="">
              <h2 className="heading">strenght & consitining</h2>
              <h4 className="paragraph">chest</h4>
            </div> */}
          </div>
          <img src="/food.jpg" className="object-cover h-[400px] w-full rounded-3xl" alt="" />
          <AbstractSection/>
          <div className=" space-y-3">
            <h2 className="heading">about the class</h2>
            <p className="paragraph ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure doloribus similique perferendis impedit aut eligendi cumque distinctio doloremque sapiente, omnis exercitationem vel facilis officia ut est obcaecati, pariatur minus commodi tempora voluptatum. Quas quam nihil deleniti, incidunt blanditiis eos aliquam sint cum in repellat est distinctio vero sunt enim cupiditate magni repellendus libero modi, suscipit ipsum. Quod omnis nihil molestias magnam, odit sequi asperiores ipsam quo, id illum error.</p>
          </div>
          <Equipment/>
          <Benifit/>
        </div>
      </section>
    )
  }

  const OtherExersice = () =>{

    const ExerciseBox = () =>{
      return(
        <div className={`flex gap-4  extraground border-b border-paragraph/20 pb-4`}>
          <img src="/food.jpg" className="w-[50px] h-[50px] object-cover rounded-3xl" alt="" />
          <div className="">
            <h2 className="text  mb-1 font-semibold">dumbell squats</h2>
            <div className="flex text-xs gap-4 paragraph">
              <h3>100 kcal</h3>
              <h3 className=" border-x px-3">100 kcal</h3>
              <h3>100 kcal</h3>
            </div>
          </div>
        </div>
      )
    }
    return(
      <section>
        <div className=" extraground p-5 rounded-3xl">
          <h3 className="heading mb-5">exercises</h3>
          <div className="space-y-3">
          {Array.from({length:5}).map((_,index)=>(
            <ExerciseBox key={index}/>
          ))}
          </div>
        </div>
      </section>
    )
  }

  const MuscleSection = () =>{
    return(
      <section>
        <div className=" rounded-3xl extraground p-5 space-y-3">
          <h2 className="heading">benifits</h2>
          <div className="flex flex-wrap gap-3">
            {['biceps','triceps','forearms','shoulder','chest'].map((item,index)=>(
              <div key={index} className="flex items-center  p-2 gap-3 rounded-3xl border border-primary bg-primary/50 text">
                <span className=" bg-primary py-2 px-2 rounded-xl !w-fit"><HiHand/></span>
                <h5 className=" text-sm font-semibold pr-2">{item}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }


  const GraphSection = () => {
      const data = [
        { subject: 'bicep', A: 120, B: 110, fullMark: 150 },
        { subject: 'tricep', A: 98, B: 130, fullMark: 150 },
        { subject: 'forearms', A: 86, B: 130, fullMark: 150 },
        { subject: 'shoulder', A: 70, B: 130, fullMark: 150 },
        { subject: 'chest', A: 40, B: 130, fullMark: 150 },
      ];
    
      return (
        <section>
          <div className=" extraground p-5 rounded-3xl space-y-4">
          <h2 className="heading">nutritian graph</h2>
          <div className=" h-[250px] w-full extraground rounded-3xl flex justify-center items-center overflow-hidden">
            <ResponsiveContainer width="100%" className={'top-0 relative'} height="100%">
              <RadarChart
                width={300}
                height={300}
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={data}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#F9F189" fill="#F9F189" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          </div>
        </section>
      );
    };


  return (
    <div className="">
        <div className="main flex flex-col xl:flex-row gap-3">
            <div className="xl:w-[73%] space-y-3">
              <DetailSection/>
            </div>
            <div className="xl:w-[27%] space-y-3">
              <MuscleSection/>
              <GraphSection/>
              <OtherExersice/>
            </div>
          </div>
    </div>
  )
}

export default Workout