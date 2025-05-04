import Button from '../items/Button'

interface WorkoutBoxProp {
    item:{
        name:string,
        calorie:number,
        dificulty:string
    }
}
const WorkoutBox = ({item}:WorkoutBoxProp) => {
  return (
    <div className=' flex justify-between gap-6'>
        <div className="image">
            <img src="" className=' object-cover w-full h-full' alt="" />
        </div>
        <div className="">
            <h1>{item.name}</h1>
            <div className="flex items-center justify-between">
                <div className="">
                    <h3>{item.calorie}</h3>
                    <h3>{item.dificulty}</h3>
                </div>
                <Button name='add to workout'/>
            </div>
        </div>
    </div>
  )
}

export default WorkoutBox