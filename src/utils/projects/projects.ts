import { getAllProjects } from "@/utils/actions/projects";
import { unstable_cache } from 'next/cache';

// Cache the projects data
export const getProjects = unstable_cache(
  async () => {
    const { data } = await getAllProjects();
    return data;
  },
  ['projects-cache'],
  { revalidate: 3600 } // Cache for 1 hour
);