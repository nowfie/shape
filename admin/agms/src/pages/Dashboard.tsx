import { useState } from "react"
import SideBar from "../components/items/SideBar"
import Home from "./home/Home"
import Food from "./food/Food"
import Equiment from "./equipment/Equiment"
import Workout from "./workout/Workout"
import Client from "./client/Client"
import Revenue from "./revenue/Revenue"
import Membership from "./membership/Membership"
import Trainer from "./trainer/Trainer"
import Profile from "./profile/Profile"
import Header from "../components/items/Header"
import Measurement from "./client/Measurement"
import TrainerDetail from "./trainer/TrainerDetail"
import FoodDetail from "./food/FoodDetail"

const Dashboard = (): JSX.Element => {
    const [select,setSelect] = useState('home')

    const renderDashboard = () =>{
        switch(select){
            case('home'):{
                return <Home/>
            }
            case('equipment'):{
                return <Equiment/>
            }
            case('food'):{
                return <FoodDetail/>
            }
            case('workout'):{
                return <Workout/>
            }
            case('client'):{
                return <Client/>
            }
            case('revenue'):{
                return <Revenue/>
            }
            case('membership'):{
                return <Membership/>
            }
            case('trainer'):{
                return <TrainerDetail/>
            }
            case('profile'):{
                return <Profile/>
            }
            default:{
                return <div className="main"><h1>not found</h1></div>
            }
        }
    }
    
  return (
    <main className="">
        <div className="flex flex-col xl:flex-row">
            <div className="xl:w-[15%] xl:h-screen xl:border-r xl:fixed border-paragraph/20">
                <SideBar selectItem={{select,setSelect}}/>
            </div>
            <div className="xl:w-[85%] xl:ms-auto">
                <Header select={select}/>
                {renderDashboard()}
            </div>
        </div>
    </main>
  )
}

export default Dashboard