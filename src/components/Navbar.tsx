"use client"
import {gsap} from "gsap"
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";


const Navbar = () => {
  const tl  = useRef<gsap.core.Timeline | null>(null);
    const path = usePathname()
useGSAP(()=>{
    tl.current = gsap.timeline({ paused: true });
  tl.current.to(".line1", {
    attr:{
      y1:5,
      y2:40,
    },
    stroke: "white",
    delay:0.3,
    duration: 0.7,
    
    ease: "power1.inOut",
  },"ham");
  tl.current.to(".line2", {
    attr:{
      y1:40,
      y2:5
    },
    duration: 0.7,
    delay:0.3,
    stroke: "white",
    ease: "power1.inOut",
  },"ham");
  tl.current.to(".menuWindow", {
    top:0,
    display:"flex",
    height:"100vh",
    duration: 1,
    ease: "power1.inOut",
  },"ham");
  tl.current.to(".navigation-content", {
    bottom:0,
    duration: 0.8,
    stagger:0.1,
    delay:-1,
    ease: "power2.out",
  });
})


const handleMenuOpen =()=>{
    console.log("hit open")
  tl.current?.play()
  document.getElementById("cross")?.classList.remove("hidden")
}
const  handleMenuClose   = ()=>{
    console.log("hit close")
  tl.current?.reverse()
  document.getElementById("cross")?.classList.add("hidden")
}
  return (
    <div className=' top-0 w-full fixed z-50   '>
      {/* hamburger */}
      <div className='absolute top-6 right-10 w-max p-3  cursor-pointer z-40' >
        <svg height="45" width="45" className=" "   onClick={handleMenuOpen}  id="hamBerger">
          <line
            className="line1 "
            x1="5"
            y1="17"
            x2="40"
            y2="17"
            style={{
              stroke:`${path === "/contact"? '':'#877366'}`,
              strokeWidth: 3,
            }}
          />
          <line
            className="line2 "
            x1="5"
            y1="27"
            x2="40"
            y2="27"
            style={{
              stroke:`${path === "/contact"? '':'#877366'}`,
              strokeWidth: 3,
            }}
          />
        </svg>
      </div>

        <div className='absolute w-[45px] h-[45px] z-50   top-8 right-12   p-3  cursor-pointer hidden ' id='cross' onClick={handleMenuClose} ></div>
      {/* navigation  window */}
      <div className="absolute  w-screen  px-[15vw] items-center h-screen bg-dark z-30 menuWindow  overflow-hidden hidden top-[100vh] navigation-container ">
        {/* navigation content */}
            <div className="w-full z-30">
              {
                ["home" ,"projects", "about", "contact" ].map((text, index)=>(
                  <Link onClick={handleMenuClose}  href={`/${text !== "home" ? text: ''}`} key={index} className="text-7xl md:text-8xl text-container font-heading uppercase tracking-widest  block  text-light border-b-2 mt-10 py-2 md:hover:tracking-[30px]  overflow-hidden cursor-pointer"><span className="navigation-content -bottom-[150px] relative  duration-500  ">{text}</span></Link>
                ))
              }
            </div>
      </div>
    </div>
  );
};

export default Navbar;