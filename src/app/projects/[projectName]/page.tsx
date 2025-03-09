import { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { TiLocationArrow } from "react-icons/ti"
import Image from "next/image"
import { IProject } from "@/types";

// Dynamically import components that are not needed immediately
const TechMarque = dynamic(() => import("@/components/projects/TechMarque"), {
  loading: () => <div className="animate-pulse h-20 bg-dark opacity-5 rounded"></div>
});

const ProjectDetailIntro = dynamic(() => import("@/components/projects/ProjectDetailIntro"), {
  ssr: true // Keep this server-side rendered as it's above the fold
});

// Update the Props type to match Next.js 15 requirements
type Props = {
  params: Promise<{ projectName: string }>;
}

// Add proper image loading component
const ProjectImage = ({ src, alt, priority = false }: { src: string, alt: string, priority?: boolean }) => (
  <Image
    src={src}
    alt={alt}
    width={1200}
    height={800}
    className="w-full rounded-3xl mx-auto"
    priority={priority}
    loading={priority ? "eager" : "lazy"}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
    quality={75} // Optimize image quality
  />
);

// Add metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectName } = await params;
  const res = await fetch(`${process.env.SERVER_URL}/projects/${projectName}`, {
    next: { revalidate: 3600 }
  });
  const { data } = await res.json();
  
  return {
    title: `${data.name} | Project Details`,
    description: data.headline,
    openGraph: {
      title: `${data.name} | Project Details`,
      description: data.headline,
      images: [data.photo],
    }
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
  const { projectName } = await params;
  
  const res = await fetch(`${process.env.SERVER_URL}/projects/${projectName}`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    notFound();
  }

  const { data: project } = await res.json();

  return (
    <div className="lg:px-36 px-4 min-h-screen w-screen">
      <div>
        <div className="min-h-screen">
          <ProjectDetailIntro projectName={project.name}/>
        </div>

        <div className="my-20">
          <h1 className="md:text-4xl sm:text-2xl text-xl font-body text-dark font-extralight max-w-[80vw] mx-auto text-center">
            {project.headline}
          </h1>
          
          {/* Links section */}
          <div className="flex items-center justify-around mt-12 font-body md:text-2xl text-xs font-light">
            {project.name !== "YouShare" && (
              <>
                <LinkButton href={project.live_link} text="Live Demo" />
                <LinkButton href={project.client_code} text="Client Side Code" />
              </>
            )}
            <LinkButton href={project.server_code} text="Server Side Code" />
          </div>

          {/* Main project image */}
          <div>
            <ProjectImage 
              src={project.photo} 
              alt={`${project.name} preview`}
              priority={true} 
            />
            <p className="md:max-w-[80vw] max-w-[90vw] mx-auto mt-12 font-body font-light text-lg opacity-90">
              {project.sub_description}
            </p>
          </div>

          {/* Features section */}
          <Suspense fallback={<div className="animate-pulse h-40 bg-gray-200 rounded mt-12"></div>}>
            <div className="mt-12">
              <h2 className="font-body tracking-[4px] md:text-4xl sm:text-2xl text-xl font-[100] text-center uppercase">
                key characteristics and features
              </h2>
              <FeaturesList features={project.key_features} />
            </div>
          </Suspense>

          <div className="mt-12 text-dark font-body font-light text-lg">
            <p>{project.description}</p>
          </div>

          {/* YouShare specific images */}
          {project.name === 'YouShare' && (
            <Suspense fallback={<div className="animate-pulse h-96 bg-gray-200 rounded mt-12"></div>}>
              <div className="space-y-12 mt-12">
                <ProjectImage 
                  src="https://res.cloudinary.com/dtqsckwk9/image/upload/v1726392685/apis_valylk.jpg"
                  alt="YouShare APIs"
                />
                <ProjectImage 
                  src="https://res.cloudinary.com/dtqsckwk9/image/upload/v1726391051/share4_rofnhm.png"
                  alt="YouShare preview 1"
                />
                <ProjectImage 
                  src="https://res.cloudinary.com/dtqsckwk9/image/upload/v1726391053/share1_rnfdqu.png"
                  alt="YouShare preview 2"
                />
              </div>
            </Suspense>
          )}

          {/* Tech stack */}
          <Suspense fallback={<div className="animate-pulse h-20 bg-gray-200 rounded mt-12"></div>}>
            <TechMarque technologies={project.technologies}/>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

// Extracted components for better organization and performance
const LinkButton = ({ href, text }: { href: string; text: string }) => (
  <div className="group">
    <a href={href} className="flex items-center" target="_blank" rel="noopener noreferrer">
      {text} <TiLocationArrow className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
    </a>
    <div className="h-[2px] group-hover:w-full w-0 duration-500 bg-dark mx-auto"></div>
  </div>
);

const FeaturesList = ({ features }: { features: string[] }) => (
  <div className="mt-6">
    {features.map((feature, idx) => (
      <div
        className="font-body flex items-center justify-center gap-4 text-center font-light text-lg mt-4 group relative"
        key={idx}
      >
        <div className="w-12 h-[2px] hidden lg:block">
          <div className="bg-dark group-hover:w-full w-0 duration-500 h-full mx-auto"></div>
        </div>
        <p>
          <TiLocationArrow className="inline-block rotate-45 mr-2 lg:hidden"/>
          {feature}
        </p>
      </div>
    ))}
  </div>
);