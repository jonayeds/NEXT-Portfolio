import ProjectDetailIntro from "@/components/projects/ProjectDetailIntro"
import TechMarque from "@/components/projects/TechMarque"
import { IProject } from "@/types"
import { TiLocationArrow } from "react-icons/ti"
import Image from "next/image"
import { Metadata } from "next"
import { notFound } from "next/navigation"

// Update the Props type to match Next.js 15 requirements
type Props = {
  params: Promise<{ projectName: string }>;
}

// Update the metadata function with correct types
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectName } = await params;  // Note the await here
  const res = await fetch(`${process.env.SERVER_URL}/projects/${projectName}`);
  const { data } = await res.json();
  
  return {
    title: `${data.name} | Project Details`,
    description: data.headline,
  };
}

// Add ISR revalidation
export const revalidate = 3600; // Revalidate every hour

// Generate static paths for all projects
export async function generateStaticParams() {
  const res = await fetch(`${process.env.SERVER_URL}/projects`);
  const { data } = await res.json();
  
  return data.map((project: IProject) => ({
    projectName: project.name.toLowerCase(),
  }));
}

// Update the page component with correct types
export default async function ProjectDetail({ params }: Props) {
  const { projectName } = await params;  // Note the await here
  
  const res = await fetch(`${process.env.SERVER_URL}/projects/${projectName}`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    notFound();
  }

  const { data: project } = await res.json();

  return (
    <div className="lg:px-36 px-4 min-h-screen w-screen">
      <div className="">
        <div className="min-h-screen">
          <ProjectDetailIntro projectName={project.name}/>
        </div>

        <div className="my-20   ">
          <h3 className="md:text-4xl sm:text-2xl text-xl font-body text-dark font-extralight max-w-[80vw]  mx-auto text-center">
            {project.headline}
          </h3>
          <div className="flex items-center justify-around mt-12 font-body md:text-2xl text-xs font-light" style={{
            wordSpacing:"1px"
          }}>
            <div className={`group ${project.name === "YouShare" && 'hidden'}`}>
              <a
                href={project.live_link}
                className="flex items-center cursor-pointer"
                target="#"
              >
                Live Demo <TiLocationArrow className="group-hover:bottom-1 bottom-0 left-0 group-hover:left-1 relative duration-300 " />
              </a>
              <div className="h-[2px] group-hover:w-full w-0 duration-500 bg-dark mx-auto"></div>
            </div>
            <div className={`group ${project.name === "YouShare" && 'hidden'}`}>
              <a
                href={project.client_code}
                className="flex items-center "
                target="#"
              >
                Client Side Code <TiLocationArrow className="group-hover:bottom-1 bottom-0 left-0 group-hover:left-1 relative duration-300 " />
              </a>
              <div className="h-[2px] group-hover:w-full w-0 duration-500 bg-dark mx-auto"></div>
            </div>
            <div className="group">
              <a
                href={project.server_code}
                className="flex items-center "
                target="#"
              >
                Server Side Code <TiLocationArrow  className="group-hover:bottom-1 bottom-0 left-0 group-hover:left-1 relative duration-300 " />
              </a>
              <div className="h-[2px] group-hover:w-full w-0 duration-500 bg-dark mx-auto"></div>
            </div>
          </div>
          <div>
            <Image
              src={project.photo}
              alt={`${project.name} preview`}
              width={800}
              height={600}
              className="lg:w-[45vw] md:w-[60vw] w-[90vw] mt-24 mx-auto rounded-2xl"
              priority
              quality={100}
            />
            <p className="md:max-w-[80vw] max-w-[90vw] mx-auto mt-12 font-body font-light text-lg opacity-90">
              {project.sub_description}
            </p>
          </div>
          <div className="mt-12">
            <h2 className="font-body tracking-[4px] md:text-4xl sm:text-2xl text-xl font-[100] text-center uppercase ">
              key characteristics and features
            </h2>
            <div  className="mt-6">
              {(project as IProject).key_features.map((feature: string, idx: number) => (
                <div
                  className="font-body flex  items-center justify-center gap-4 text-center font-light  text-lg mt-4 group relative "
                  key={idx}
                >
                  <div className="w-12 h-[2px]  hidden lg:block ">
                    <div className="bg-dark group-hover:w-full w-0 duration-500 h-full mx-auto"></div>
                  </div>
                  <p><TiLocationArrow className="inline-block rotate-45 mr-2 lg:hidden"/>{feature}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-dark font-body font-light text-lg">
                <p>{project.description}</p>
            </div>
            {project.name === 'YouShare' && (
              <>
                <Image
                  src="https://res.cloudinary.com/dtqsckwk9/image/upload/v1726392685/apis_valylk.jpg"
                  alt="YouShare APIs"
                  width={1200}
                  height={800}
                  className="lg:w-[60vw] w-full rounded-3xl mx-auto"
                />
                <div className="flex flex-col justify-center items-center gap-12 mt-24">
                  <Image
                    src="https://res.cloudinary.com/dtqsckwk9/image/upload/v1726391051/share4_rofnhm.png"
                    alt="YouShare preview 1"
                    width={1200}
                    height={800}
                    className="lg:w-[75vw] w-full rounded-3xl"
                  />
                  <Image
                    src="https://res.cloudinary.com/dtqsckwk9/image/upload/v1726391053/share1_rnfdqu.png"
                    alt="YouShare preview 2"
                    width={1200}
                    height={800}
                    className="lg:w-[75vw] w-full rounded-3xl"
                  />
                </div>
              </>
            )}
            <TechMarque technologies={project.technologies}/>
          </div>
        </div>
      </div>
    </div>
  )
}