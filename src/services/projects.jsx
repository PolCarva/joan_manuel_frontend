
import { stables } from "../constants/stables";

export const getProjectBySlug = async (slug) => {
  try {
    const response = await fetch(`${stables.BASE_URL}/projects/by-slug/${slug}`);
    const project = await response.json();
    return project.docs[0];
  } catch (error) {
    console.error(error);
  }
};

export const getProjectsByType = async (type) => {
  try {
    const response = await fetch(`${stables.BASE_URL}/projects/by-type/${type}`);
    const projects = await response.json();
    const docs = projects.docs;
    docs.sort((a, b) => new Date(b.year) - new Date(a.year));
    docs.forEach((project, index) => {
      project.index = index;
    });
    return docs;
  } catch (error) {
    console.error(error);
  }
};

export const getAllProjects = async () => {
  try {
    const response = await fetch(`${stables.BASE_URL}/projects`);
    const projects = await response.json();
    const docs = projects.docs;

    const typeIndexes = {};

    docs.forEach((project) => {
      if (!typeIndexes[project.type]) {
        typeIndexes[project.type] = 0;
      } else {
        typeIndexes[project.type]++;
      }

      project.index = typeIndexes[project.type].toString().padStart(2, '0');
    });

    return docs;
  } catch (error) {
    console.error(error);
  }
};

