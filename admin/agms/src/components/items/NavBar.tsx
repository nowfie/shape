import { Link } from "react-router-dom"
import { navItems } from "../../utils/staticData"
import { useState } from "react"
import { HiMiniBars3 } from "react-icons/hi2"
import { CgClose } from "react-icons/cg"
import { motion } from "framer-motion"

const NavBar = (): JSX.Element => {

  const [nav,setNav] = useState(false)
  return (
    <nav className=" py-4">
      <div className="main flex justify-between items-center">
        <div className="logo">
          <h1 className=" capitalize text-3xl font-semibold text">logo</h1>
        </div>
        <div className="nav-items items-center space-x-16 hidden xl:flex text-sm extraground px-12 py-5 rounded-3xl">
          {navItems.map((item,index)=>(
            <Link className="text font-semibold" key={index} to={item.path}>{item.name}</Link>
          ))}
        </div>
        <motion.div className="block xl:hidden" whileTap={{ scale: 1.1 }}>
          <button
            className="title"
            onClick={() => { setNav(!nav) }}
          >
            {nav ? (
              <HiMiniBars3 />
            ) : (
              <CgClose />
            )}
          </button>
        </motion.div>
        <div className="profile hidden xl:flex items-center gap-4">
          <div className=" rounded-full dark:bg-white bg-black p-6">

          </div>
          <div className="text">
            <h1 className=" text-base capitalize font-semibold">trainer name</h1>
            <h4 className=" text-sm capitalize">trainer</h4>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar