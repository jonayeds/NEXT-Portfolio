"use client"
import {gsap} from "gsap"
import { useGSAP } from "@gsap/react";
import Link from "next/link";


const Navbar = () => {
  const tl  = gsap.timeline()
useGSAP(()=>{
  tl.to(".line1", {
    attr:{
      y1:0,
      y2:30,
    },
    stroke: "white",
    delay:0.3,
    duration: 0.7,
    
    ease: "power1.inOut",
  },"ham");
  tl.to(".line2", {
    attr:{
      y1:30,
      y2:0
    },
    duration: 0.7,
    delay:0.3,
    stroke: "white",
    ease: "power1.inOut",
  },"ham");
  tl.from(".menuWindow", {
    top:"100vh",
    height:0,
    duration: 1,
    ease: "power1.inOut",
  },"ham");
  tl.from(".navigation-content", {
    bottom:-150,
    duration: 0.8,
    stagger:0.1,
    delay:-1,
    ease: "power2.out",
  });
})
tl.pause()

const handleMenuOpen =()=>{
  tl.play()
  document.getElementById("cross")?.classList.remove("hidden")
}
const  handleMenuClose   = ()=>{
  tl.reverse()
  document.getElementById("cross")?.classList.add("hidden")
}
  return (
    <div className=' top-0 w-full fixed z-50   '>
      {/* hamburger */}
      <div className='absolute top-6 right-6     w-max p-3  cursor-pointer z-40' >
        <svg height="30" width="30" className=" "   onClick={handleMenuOpen}  id="hamBerger">
          <line
            className="line1 "
            x1="0"
            y1="10"
            x2="30"
            y2="10"
            style={{
              stroke:"#877366",
              // stroke:"currentcolor",
              strokeWidth: 3,
            }}
          />
          <line
            className="line2 "
            x1="0"
            y1="20"
            x2="30"
            y2="20"
            style={{
              // stroke:"currentcolor",
              stroke:"#877366",
              strokeWidth: 3,
            }}
          />
        </svg>
      </div>

        <div className='absolute w-[40px] h-[40px] z-50   top-8 right-8  p-3  cursor-pointer hidden ' id='cross' onClick={handleMenuClose} ></div>
      {/* navigation  window */}
      <div className="absolute  w-screen   flex  px-[15vw] items-center h-screen bg-dark z-30 menuWindow  overflow-hidden  navigation-container ">
        {/* navigation content */}
            <div className="w-full z-30">
              {
                ["home" ,"projects", "about", "contact" ].map((text, index)=>(
                  <Link onClick={handleMenuClose} href={`/${text !== "home" ? text: ''}`} key={index} className="text-7xl md:text-8xl text-container font-heading uppercase tracking-widest  block  text-light border-b-2 mt-10 py-2 md:hover:tracking-[30px]  overflow-hidden cursor-pointer"><span className="navigation-content relative  duration-500  ">{text}</span></Link>
                ))
              }
            </div>
      </div>
    </div>
  );
};

export default Navbar;