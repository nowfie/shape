import { BiSearch } from 'react-icons/bi';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import Line from '../../components/items/Line';
import FoodBox from '../../components/food/FoodBox';


const Food = (): JSX.Element => {

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
        <div className=" extraground p-5 rounded-2xl space-y-4">
        <h2 className="heading">nutritian graph</h2>
        <div className=" h-[250px] w-full extraground rounded-2xl flex justify-center items-center overflow-hidden">
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

  const ListSection = () =>{
    const item= {
      name: 'string',
      time: 'string',
      nutrient: {
          carb: 4,
          protein: 3,
          fat: 3
      },
      calories: 2,
      dificulty: 'string'
  }
    return(
      <section>
        <div className="extraground p-5 rounded-2xl">
          <div className="flex justify-between">
            <h2 className='heading'>all menu</h2>
            <div className="flex gap-4 extraground  items-center rounded-2xl">
                  <div className=" flex items-center gap-3">
                      <input type="text" placeholder="search here..." className="background rounded-2xl h-full placeholder-paragraph text-sm capitalize p-3" name="" id="" />
                      {/* <button className=" bg-primary text w-[35px] items-center h-[35px] rounded-xl text-sm"><BiSearch className=" items-center m-auto"/></button> */}
                  </div>
                  <div className="flex items-center gap-4">
                      <div className=" space-y-1">
                          <select name="" id="" className=' background px-4 py-2 rounded-2xl capitalize text font-semibold'>
                            <option value="">filter</option>
                            <option value="">protein</option>
                            <option value="">carb</option>
                            <option value="">carb</option>
                          </select>
                          {/* <h2 className=" capitalize paragraph text-sm">trainer</h2> */}
                      </div>
                  </div>
              </div>
          </div>
          <Line className='my-4'/>
          <FoodBox item={item}/>
        </div>
      </section>
    )
  }
  
  return (
    <main>
        <div className="main flex flex-col xl:flex-row gap-5">
            <div className="xl:w-[73%] space-y-5">
              <ListSection/>
            </div>
            <div className="xl:w-[27%] space-y-5">
              <GraphSection/>
            </div>
          </div>
    </main>
  )
}

export default Food