"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectDetailIntro = ({projectName}:{projectName:string}) => {
    const tl = gsap.timeline();
  useGSAP(() => {
    tl.to(".project-loader", {
      height: "90vh",
      duration: 0.8,
      ease: "power2.inOut",
    });

    tl.to(".project-heading", {
      opacity: 1,
      duration: 0.5,
      letterSpacing: "12px",
    });
  });
  return (
    <div className="bg-dark text-light h-0 project-loader rounded-b-lg flex items-end justify-center shadow-md">
            <h1 className="text-[12vw] project-heading opacity-0 text-center font-heading tracking-[30px] uppercase mb-20 lg:mb-0">
              {projectName}
            </h1>
          </div>
  )
}

export default ProjectDetailIntro