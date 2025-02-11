"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechMarque = ({technologies}:{technologies:string[]}) => {
    const tech = gsap.timeline();
  useGSAP(() => {
    
    tech.to(".tech",{
        x:"-100%",
        duration:10,
        ease: "none",
    }).repeat(-1)

    // tl.pause()
  });
  return (
     <div className="mt-12">
            <h2 className="font-body tracking-[4px] md:text-4xl sm:text-2xl text-xl font-[100] text-center uppercase ">
              Technologies used
            </h2>
            <div className="max-w-7xl mx-auto  overflow-hidden    mt-10 tech-container cursor-default space-x-16 text-dark whitespace-nowrap " onMouseEnter={()=>tech.pause()} onMouseLeave={()=>tech.play()}>
            <div className=" tech  space-x-8 inline-block">
                {
                    technologies.map((tech,idx)=>(
                        <p key={idx} className="text-dark font-body inline-block text-center font-light text-xl uppercase ">{tech}</p>
                    ))
                }
            </div>
            <div className=" tech inline-block space-x-8">
                {
                    technologies.map((tech,idx)=>(
                        <p key={idx} className="text-dark font-body inline-block font-light text-center text-xl uppercase">{tech}</p>
                    ))
                }
            </div>
            </div>
            </div> 
  )
}

export default TechMarque