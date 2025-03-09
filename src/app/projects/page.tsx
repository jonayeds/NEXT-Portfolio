import AllProjects from "@/components/projects/AllProjects"; // Import the cached function
import { getProjects } from "@/utils/projects/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: 'Explore my recent frontend and backend development projects',
};

const Projects = async() => {
  const data = await getProjects();
  
  return (
    <div className="min-h-screen w-screen bg-light lg:px-24 px-4 md:px-10 flex  items-center justify-center ">
      <div className="absolute top-0 w-screen h-screen lg:-mx-24 bg-dark -mx-4 project-loader z-30"></div>
      <div className="w-full text-center  lg:text-left h-max flex items-end justify-around flex-col md:flex-row lg:pt-12 pt-20 ">
        <div className="mx-auto py-8 ">
          <div className="overflow-hidden">
            <h1 className="text-7xl font-heading font-[100] tracking-[8px]  uppercase heading">
              Projects
            </h1>
          </div>
          <p className="max-w-xl font-body tracking-[1.2px] mt-4">
            Here are some of my recent projects. These projects showcases
            Frontend and Backend Development skills.
          </p>
        </div>
        <AllProjects projects={data}/>
      </div>
    </div>
  );
};

export default Projects;
