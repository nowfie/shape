import { useState } from "react";
import { navItems } from "../../utils/staticData";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { HiMiniBars3 } from "react-icons/hi2";

const SideBar = ({selectItem}:{selectItem:{select:string,setSelect:React.Dispatch<React.SetStateAction<string>>}}): JSX.Element => {
    const [nav, setNav] = useState(false);
    return (
        <nav className="h-full">
            <div className=" w-11/12  xl:x-12/12 py-4 xl:p-4 mx-auto xl:h-full flex xl:flex-col justify-between xl:justify-normal items-center h-full xl:items-start relative">
                <div className="logo xl:h-[100px] xl:mb-8  xl:p-5 extraground xl:w-full">
                    <h1 className="heading">logo</h1>
                </div>
                <div className="hidden xl:block w-full h-full">
                    <div className="flex flex-col justify-between xl:h-full">
                        <div className="">
                            {/* <h3 className=" text mb-8">menu</h3> */}
                            <div className="flex flex-col w-full gap-5 ">
                                {navItems.map((item, index) => (
                                    <button onClick={()=>selectItem.setSelect(item.name)} className={`${selectItem.select == item.name ?' bg-primary px-3 py-3 text':''} rounded-2xl capitalize text-sm text-left flex items-center gap-4 py-2 paragraph  w-full`} key={index}>
                                        <span className={`  rounded-2xl `}>
                                            <item.icon className="text-lg" />
                                        </span> {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="contact  xl:h-[100px] w-full hidden xl:hidden p-4 extraground ">
                            <h1 className="heading">contact</h1>
                        </div>
                    </div>
                </div>
                {/* <div className="contact xl:h-[100px] absolute bottom-4 w-full hidden xl:block p-4 extraground ">
                    <h1 className="heading">contact</h1>
                </div> */}
                <motion.div className="text-2xl xl:hidden" whileTap={{ scale: 1.1 }}>
                    <button onClick={() => setNav(!nav)} className="text">
                        {nav ? <IoClose /> : <HiMiniBars3 />}
                    </button>
                </motion.div>
                <div className={`fixed top-0 left-0 h-full w-3/4 extraground shadow-md transform ${nav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 xl:hidden`}>
                    <div className="flex flex-col p-6 space-y-6">
                    {navItems.map((item, index) => (
                            <button onClick={()=>{selectItem.setSelect(item.name); setNav(!nav)}} className={` capitalize text-sm text-left flex items-center gap-4 py-2 paragraph  w-full`} key={index}>
                                <item.icon className="text-lg" /> {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SideBar;
