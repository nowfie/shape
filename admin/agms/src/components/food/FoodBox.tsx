import { FaChartGantt } from "react-icons/fa6"
import Button from "../items/Button"
import { LuFireExtinguisher, LuLamp, LuLeaf, LuChartBar, LuChartGantt } from "react-icons/lu"


interface FoodBoxProp {
    item: {
        name: string,
        time: string,
        nutrient: {
            carb: number,
            protein: number,
            fat: number
        },
        calories: number,
        dificulty: string
    }
}

const FoodBox = ({ item }: FoodBoxProp): JSX.Element => {
    return (

        <div className="text-xs p-3">
            <div className="background p-4 w-full   rounded-2xl text-white flex gap-3 items-center ">
                <div className="image  ">
                    <img src="/food.jpg" alt="" className="object-cover w-full h-[120px] rounded-2xl" />
                </div>
                <div className="flex-row pb-3 ">
                    <div className="flex-col ">
                        <div className="flex justify-between  ">
                            <div className="py-2 flex ">
                                <p className="paragraph  bg-primary text w-[70px]  p-1 text-center rounded-[5px] text-[12px] m-1">Breakfast</p>
                                <p className="paragraph  background w-[60px]  p-1 text-center rounded-[5px] text-[12px] m-1"> ☰  Easy</p></div>
                            <div className="paragraph pt-2 ">
                                Health Score: <strong className="text-gray-50 text-[20px]">9</strong>/10

                            </div>
                        </div>
                        <h1 className="text text-xl font-bold pb-5">Avocodo Toast with Poached Egg</h1>

                    </div>

                    <div className="flex justify-between items-center text-sm text-[12px]">
                        <div className="nutri flex  align-middle text-center background rounded-[5px] ">
                            {Object.entries(item.nutrient).map(([key, value], index) => (

                                <h3 key={key}>

                                    <p className=" flex paragraph p-2 w-[125px] "  > {index !== 0 && <div className="h-4 w-0.5 bg-gray-500 mr-4 rounded-[10px]"></div>}<LuLeaf className="mt-1 m-1 " /> {key} {value}g </p>



                                </h3>
                            )
                            )}
                        </div>

                    </div>
                </div>
            </div >
        </div>
    )
}

export default FoodBox