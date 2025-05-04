import { BiFoodTag } from "react-icons/bi"

const Equiment = (): JSX.Element => {
  const InfoSection = () =>{
    const InfoBox = () =>{
      return(
        <div className="bg-primary rounded-2xl p-5 flex-1">
          <div className="flex items-center gap-4 mb-5">
            <span className=" bg-secondary border text border-primary p-3 rounded-2xl"><BiFoodTag/></span>
          </div>
          <h1 className="text font-black text-5xl mb-3">34</h1>
          <h2 className="paragraph">total equipments</h2>

        </div>
      )
    }
    return(
      <section>
        <div className="flex flex-col lg:flex-row gap-5">
          <InfoBox/>
          <InfoBox/>
          <InfoBox/>
          <InfoBox/>
        </div>
      </section>
    )
  }

  const EquipmentList = () => {
    return (
      <section>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left extraground border-collapse rounded-2xl overflow-hidden">
            <thead className=" text">
              <tr>
                <th className="p-4 border-b border-paragraph ">S.No</th>
                <th className="p-4 border-b border-paragraph ">Equipment Name</th>
                <th className="p-4 border-b border-paragraph ">Status</th>
                <th className="p-4 border-b border-paragraph ">Last Maintenance</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, index) => (
                <tr
                  key={index}
                  className={`${index !=9?'border-b':''} border-paragraph hover:bg-[#ececec] transition text-paragraph`}
                >
                  <td className="p-4 ">{index + 1}</td>
                  <td className="p-4  capitalize">
                    Cable Pull Down
                  </td>
                  <td className="p-4  capitalize">
                    Repaired
                  </td>
                  <td className="p-4 ">11/08/2024</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  };
  

  return (
    <div className="">
        <div className="main flex flex-col gap-5">
            <div className="space-y-5 w-full">
              <InfoSection/>
            </div>
            <div className=" flex flex-col xl:flex-row gap-5">
              <div className="xl:w-1/2 space-y-5">
              <EquipmentList/>
              </div>
              <div className="xl:w-1/2 space-y-5">
                
              </div>
            </div>
          </div>
    </div>
  )
}

export default Equiment