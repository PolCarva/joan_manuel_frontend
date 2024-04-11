import { filmProjects, photoProjects } from "../data/data";

export const getProjectBySlug = (slug) => {
  const allProjects = [...filmProjects, ...photoProjects];
  return allProjects.find((project) => project.name.toLowerCase() === slug.toLowerCase());
}

export const getProjectsByCategory = (category) => {
  const allProjects = [...filmProjects, ...photoProjects];
  return allProjects.filter((project) => project.category.toLowerCase() === category.toLowerCase());
}

export const getProjects = () => {
  return [...filmProjects, ...photoProjects];
}