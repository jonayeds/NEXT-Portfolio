/* eslint-disable @next/next/no-img-element */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from "next/link";
// import Image from "next/image";
import { useGetProjectsQuery } from "@/redux/api/baseApi";
import { IProject } from "@/types/index";

const Projects = () => {
  const { data } = useGetProjectsQuery(undefined);
  const projects = data?.data;
  console.log(projects);
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
    <div className="min-h-screen w-screen bg-light lg:px-24 px-4 md:px-10 flex  items-center justify-center ">
      <div className="absolute top-0 w-screen h-screen lg:-mx-24 bg-dark -mx-4 project-loader z-30"></div>
      <div className="w-full text-center  lg:text-left h-max flex items-end justify-around flex-col md:flex-row lg:pt-12 pt-20">
        <div className="mx-auto py-8">
          <div className="overflow-hidden">
            <h1 className="text-7xl font-heading font-[100] tracking-[8px]  uppercase heading">
              Projets
            </h1>
          </div>
          <p className="max-w-xl font-body tracking-[1.2px] mt-4">
            Here are some of my recent projects. These projects showcases
            Frontend and Backend Development skills.
          </p>
        </div>
        <div className="md:px-10 font-body  uppercase tracking-[2px] md:tracking-[6px] md:text-[6vh] text-[5vh] font-[100] py-10 md:py-0 overflow-y-auto max-h-[80vh]  mx-auto">
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
              <img
              width={500}
              height={500}
              src={project.photo}
              alt=""
              className={`w-80 absolute rounded-2xl ${project.name.toLowerCase() !== "youshare"? project.name.toUpperCase() : "YOUSHARE projectImg" } hidden opacity-0 scale-0 z-10 projectImg`}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
