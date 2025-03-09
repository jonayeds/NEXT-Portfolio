/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { IProject } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

const AllProjects = ({projects}:{projects:IProject[]}) => {
    const tl = gsap.timeline();
  useGSAP(() => {
    tl.to(".project-loader", {
      height: 0,
      duration: 2,
      ease: "power2.inOut",
    });
    tl.from(".heading", {
      y: 100,
      duration: 0.8,
      delay: -0.6,
    });
  });
  const handleMouseEnter = (e: any) => {
    const target = e.target.innerText;
    if (target) {
      gsap.to(`.${target || "saf"}`, {
        display: "block",
        opacity: 1,
        scale: 1,
        top: e.pageY - 160,
        left: e.pageX - 400,
        duration: 0.3,
      });
    } else {
      gsap.to(".projectImg", {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        display: "none",
      });
    }
  };
  const handleMouseLeave = (e: any) => {
    const target = e?.target?.innerText;
    if (target) {
      gsap.to(`.${target || "af"}`, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        display: "none",
      });
    }
  };

  return (
    <div className="md:px-10  font-body  uppercase tracking-[2px] md:tracking-[6px] md:text-[3vw] lg:text-[3.5vw] text-[5vw] font-[100] py-10 md:py-0 md:overflow-y-auto max-h-[80vh]  mx-auto ">
          {projects?.map((project: IProject) => (
            <Link
              href={`/projects/${(project.name as string).toLocaleLowerCase()}`}
              key={project._id}
              onMouseMove={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
              <h1 className=" py-7 border-b-2  border-[#1a1a1a] cursor-pointer">
                {project.name.toUpperCase()}
              </h1>
              <Image
                width={500}
                height={500}
                src={project.photo}
                alt={`${project.name} preview`}
                className={`w-80 absolute rounded-2xl ${project.name.toLowerCase() !== "youshare"? project.name.toUpperCase() : "YOUSHARE projectImg" } hidden opacity-0 scale-0 z-10 projectImg`}
                priority={true}
                quality={100}
              />
              
            </Link>
          ))}
        </div>
  )
}

export default AllProjects