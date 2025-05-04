import { Link } from "react-router-dom"
import FeaturedMenuBox from "../../components/food/FeaturedMenuBox"
import { BiFoodMenu, BiStar } from "react-icons/bi"
import { BsDot } from "react-icons/bs"
import Line from "../../components/items/Line"

const FoodDetail = (): JSX.Element => {

  const FeaturedSection = () =>{
    return(
      <section>
        <FeaturedMenuBox/>
      </section>
    )
  }

  const Ingredients = () =>{
    return(
      <div className=" space-y-3 rounded-2xl extraground p-5">
        <div className="serves flex justify-between">
          <div className="flex gap-3">
            <span className=" bg-secondary rounded-2xl text p-3 m-auto"><BiFoodMenu/></span>
            <h3 className="heading ">total <br /> servings</h3>
          </div>
          {/* <div className="flex hidden ">
            <h5 className=" p-3 m-auto foreground">1</h5>
            <div className="flex">
              <button className=" bg-primary m-auto text p-3 ">+</button>
              <button className=" bg-primary m-auto text p-3 ">-</button>
            </div>
          </div> */}
        </div>
        <Line className="my-5"/>
        <h3 className="heading mb-5">ingredients</h3>
         <ul className="text space-y-3 ">
          {Array.from({length:5}).map((_,index)=>(
            <li key={index} className="flex items-center gap-3"> <span className=" rounded-2xl text-xl bg-tertiary"><BsDot/></span> 3 eggs</li>
          ))}
         </ul>
      </div>
    )
  }

  
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
      {
        name: 'fat',
        value: 290,
        bg_color: 'bg-[#E1E1E3]',
      },
    ];
    const NutriBox =({item})=>{
      return(
        <div className=" space-y-3">
          <h3 className="text font-semibold text-center">calories</h3>
          <div className={`extraground rounded-2xl p-3 `}>
            <h2 className="text-black  text-center font-semibold">350</h2>
            <h4 className="text-black text-xs text-center">kcal</h4>
          </div>
        </div>
      )
    }
    return(
      <section>
        <div className="flex bg-[#CDE9FE] rounded-2xl p-5 flex-col lg:flex-row justify-between">
          {MacroData.map((item,index)=>(
            <NutriBox item={item} key={index}/>
          ))}
        </div>
      </section>
    )
  }

  const NutritionalFacts = () =>{
    const NutriLine = () =>{
      return(
        <div className="w-full">
          <div className="values flex items-center justify-between text ">
            <h3>carbohydrates</h3>
            <h3><strong>350</strong></h3>
          </div> 
          <Line className="mt-3"/>
        </div>
      )
    }
    return(
      <section>
        <div className="extraground rounded-2xl p-5 space-y-3">
         <h3 className="heading mb-5">nutritional facts</h3>
          {Array.from({length:10}).map((_,index)=>{
            return(
              <NutriLine key={index}/>
            )
          })}
        </div>
      </section>
    )
  }  

  const ReviewSection = () =>{
    const ReviewBox = () =>{
      return(
        <div className="extraground rounded-2xl p-5">
          <div className="flex gap-5 items-center">
            <div className="image rounded-full overflow-hidden">
              <img src="/food.jpg" className=" rounded-full object-cover h-[50px] w-[50px]" alt="" />
            </div>
            <div className="">
              <h3 className="heading ">client name</h3>
              <h4 className="paragraph text-xs flex gap-3 items-center"> <span className=" text-yellow-400"><BiStar/></span> 5/5</h4>
            </div>
          </div>
          <Line className="my-4"/>
          <p className="paragraph ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ab odio voluptas fugiat quae dignissimos delectus debitis possimus. Dolores, fugiat.</p>
        </div>
      )
    }
    return(
      <section>
        <h3 className="heading mb-5">reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {Array.from({length:3}).map((_,index)=>(
            <ReviewBox key={index}/>
          ))}
        </div>
      </section>
    )
  }

  const InstructionSection = () =>{
    return(
      <section>
        <div className="extraground rounded-2xl p-5">
        <h3 className="heading mb-5">instruction</h3>
          <ul className=" space-y-7">
            {Array.from({length:5}).map((_,index)=>(
              <li key={index} className="flex  gap-4 ">
                <span className="bg-tertiary rounded-2xl font-semibold w-[50px] h-[50px] flex justify-center items-center p-2 text ">{index+1}</span>
                <div className="">
                  <h5 className=" text font-semibold capitalize mb-2">prep the ingredients</h5>
                  <p className=" paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius asperiores dolore possimus corrupti deleniti aut eveniet nobis minus voluptatibus.</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }

  return (
    <main>
        <div className="main flex flex-col xl:flex-row gap-5">
            <div className="xl:w-[73%] space-y-5">
              <FeaturedSection/>
              <InstructionSection/>
              <ReviewSection/>
            </div>
            <div className="xl:w-[27%] space-y-5">
              <MacroNutrition/>
              <Ingredients/>
              <NutritionalFacts/>
            </div>
          </div>
    </main>
  )
}

export default FoodDetail