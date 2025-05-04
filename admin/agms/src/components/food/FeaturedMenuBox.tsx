import { BiStar } from "react-icons/bi"
import { BsBarChartSteps } from "react-icons/bs"
import { FaBurn, FaRegClock } from "react-icons/fa"
import { FaBreadSlice, FaFireFlameCurved, FaTowerCell } from "react-icons/fa6"
import { FiRefreshCcw } from "react-icons/fi"
import { LuHeartPulse } from "react-icons/lu"
import { PiBread, PiFishDuotone, PiFishFill } from "react-icons/pi"
import { Link } from "react-router-dom"

interface FeaturedMenuBoxProp{
    item:{
        name:string,
        time:string,
        nutrient:{
            carb:number,
            protein:number,
            fat:number
        },
        calories:number,
        dificulty:string
    }
}

const FeaturedMenuBox = ({item}:FeaturedMenuBoxProp): JSX.Element => {

    const gridData = [
        {
            name:'dificulty',
            value:'medium',
            icon:LuHeartPulse
        },
        {
            name:'healthy',
            value:85,
            icon:LuHeartPulse
        },
        {
            name:'duration',
            value:10,
            icon:FaRegClock
        },
        {
            name:'steps',
            value:4,
            icon:BsBarChartSteps
        },
        {
            name:'duration',
            value:10,
            icon:FaRegClock
        },
        {
            name:'steps',
            value:4,
            icon:BsBarChartSteps
        },
    ]

    const GridBox = ({item}) =>{
        const label = item.name == 'dificulty'?'':item.name == 'heart score'?' / 100': item.name == 'clock duration'?' miniute':' steps'
        const Icon = item.icon
        return(
            <div className="flex gap-2 items-center">
                    <span className="bg-secondary  p-4 rounded-2xl text"><Icon/></span>
                    <div className=" space-y-1">
                        <h4 className="paragraph text-xs">{item.name}</h4>
                        <h2 className=" text font-semibold">{item.value} {label}</h2>
                    </div>
                </div>
        )
    }

    const NutriData = [
        {
          name: 'calories',
          value: 240,
          bg_color: 'bg-[#C4E66D]',
          text_color: 'text-white', 
          icon: FaFireFlameCurved
        },
        {
          name: 'carb',
          value: 240,
          bg_color: 'bg-[#FFCB65]', 
          text_color: 'text-white',
          icon: PiBread 
        },
        {
          name: 'protein',
          value: 240,
          bg_color: 'bg-[#FFA158]', 
          text_color: 'text-white',
          icon: PiFishFill 
        },
        {
          name: 'fat',
          value: 240,
          bg_color: 'bg-red-500',
          text_color: 'text-white',
          icon: FaBurn 
        },
      ];
      

    const NutriBox = ({item}) =>{
        const Icon = item.icon
        return(
            <div className={`flex gap-5 background p-3  ${item.bg_color}`}>
                <span className=" middleground p-3  text extraground"><Icon/></span>
                <div className="">
                    <h3 className={` text-white text-xs capitalize font-semibold`}>{item.name}</h3>
                    <h2 className={`${item.text_color}`}><strong>{item.value}</strong> kcal</h2>
                </div>
            </div>
        )
    }

  return (
    <div className="extraground p-5 rounded-2xl flex flex-col md:flex-row flex-wrap xl:flex-nowrap gap-8">
        <div className="xl:w-[40%] rounded-2xl  overflow-hidden">
            <img src="/food.jpg" className=" h-full object-cover" alt="" />
        </div>
        <div className="xl:w-[60%] flex flex-col gap-5 justify-between ">
            <div className="content space-y-3">
                 <div className="flex gap-5 justify-between">
                    <h3 className="px-6 capitalize rounded-xl py-2 text-sm bg-tertiary text font-bold">
                        breakfast
                    </h3>
                    <h3 className="paragraph flex items-center gap-2 text-sm"><BiStar className=" text-yellow-400"/> 4.8/5   (reviews)</h3>
                </div>
                <h1 className="text text-2xl font-bold">grilled chicken with brown rice and sambar</h1>
                
                <p className="paragraph ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem numquam obcaecati corporis voluptatum quisquam vero error esse mollitia neque assumenda, illo fugiat nostrum enim libero cupiditate iusto quam sint?</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 ">
                {gridData.map((item,index)=>(
                    <GridBox key={index} item={item}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FeaturedMenuBox