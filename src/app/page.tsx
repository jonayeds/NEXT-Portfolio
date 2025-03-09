import HomeContent from "@/components/home/HomeContent";
import { getProjects } from "@/utils/projects/projects";



export default async function Home() {
  await getProjects();
  return <HomeContent />;
}
