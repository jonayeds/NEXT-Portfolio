"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const SocialNavigation = () => {

  const location = usePathname()
  const l = location.split("/").length
  return (
    <div className="fixed h-screen w-max mix-blend-difference z-20 ">
      <div className={`${location === '/' ? "lg:hidden top-9 absolute left-0  px-6 py-2" : "lg:hidden top-9 absolute -left-20  px-6 py-2"}`}>
        <div className="flex items-center gap-5 font-body font-extralight uppercase tracking-[5px] text-xs">
          <a href="https://github.com/jonayeds" target="#" className={` ${location !== '/' ? "relative opacity-0" : "group"}`}>
            <div className="w-0 group-hover:w-full duration-500 bg-white h-[1px] opacity-60 mx-auto  "></div>
            <i className="cursor-pointer text-white">Github</i>
            <div className={`${location !== '/' ? "w-full h-full  absolute top-0" : ""}`}></div>
          </a>
          <Link className={`group`} href={(location !== "/") ? (l > 2 ? "/projects" : "/"):""}>
            <div className="w-0 group-hover:w-full duration-500 bg-white h-[1px] opacity-60 mx-auto"></div>

            <p className={`cursor-pointer text-white ${location === "/" ? "hidden" : "block"}`}>{(l > 2 ? "Projects" : "Home")}</p>
          </Link>
          <a href="https://www.linkedin.com/in/sajjad-jonayed/" target="#" className={`group`} >
            <div className="w-0 group-hover:w-full duration-500 bg-white h-[1px] opacity-60 mx-auto"></div>

            <p className={`cursor-pointer text-white ${location === "/" ? "block" : "hidden"}`}>Linkdin</p>
          </a>
          <div className={`md:w-[20vw] w-[7vw] h-[2px] bg-opacity-80 bg-white `}></div>

        </div>
      </div>
      <div className={`${location === '/' ? "hidden lg:flex absolute top-[30%]  -rotate-90  -left-28" : "hidden lg:flex absolute top-[20%]  -rotate-90  -left-28"}`}>
        <div className="flex items-center gap-8 font-body font-extralight uppercase tracking-[6px] text-xs ">
          <div className={`w-24 h-[2px] bg-opacity-80 bg-white `}></div>
          <Link className="group" href={location !== "/" ? (l > 2 ? "/projects" : "/"):"/"}>
            <div className={`w-0 group-hover:w-full duration-500 h-[1px] opacity-80 mx-auto bg-white`}></div>
            <i className={`cursor-pointer text-white ${location === "/" ? "hidden" : "block"}`}>{location === "/" ? 'Linkdin' : (l > 2 ? "Projects" : "Home")}</i>
          </Link>
          <a href="https://www.linkedin.com/in/sajjad-jonayed/" target="#" className={`group`} >
            <div className="w-0 group-hover:w-full duration-500 bg-white h-[1px] opacity-80 mx-auto"></div>

            <p className={`cursor-pointer mt-[2px] text-white ${location === "/" ? "block" : "hidden"}`}>Linkdin</p>
          </a>
          <a href="https://github.com/jonayeds" target="#" className={` ${location !== '/' ? "relative opacity-0" : "group"}`}>
            <div className="w-0 group-hover:w-full duration-500 bg-white h-[1px] opacity-80 mx-auto  "></div>
            <i className="cursor-pointer text-white mt-[2px]">Github</i>
            <div className={`${location !== '/' ? "w-full h-full  absolute top-0" : ""}`}></div>
          </a>
        </div>
      </div>

    </div>
  )
}

export default SocialNavigation