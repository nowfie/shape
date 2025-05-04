import { BiSearch } from "react-icons/bi"

const Header = ({select}:{select:string}):JSX.Element => {
  return (
    <div className="">
        <div className="main hidden xl:flex justify-between items-center">
            <h1 className="heading">{select}</h1>
            <div className="flex gap-4 extraground px-7 py-2 items-center rounded-2xl">
                <div className=" flex items-center gap-3">
                    <input type="text" placeholder="search here..." className="extraground h-full placeholder-paragraph text-sm capitalize p-3" name="" id="" />
                    <button className=" bg-primary text w-[35px] items-center h-[35px] rounded-xl text-sm"><BiSearch className=" items-center m-auto"/></button>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-[35px] h-[35px] rounded-xl bg-white"></div>
                    <div className=" space-y-1">
                        <h3 className=" capitalize text text-sm font-semibold">admin name</h3>
                        {/* <h2 className=" capitalize paragraph text-sm">trainer</h2> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header