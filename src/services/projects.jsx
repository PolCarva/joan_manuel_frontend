// services/projects.js

import { stables } from "../constants/stables";

// Función genérica para obtener datos de la API con caching
export const fetchDataWithCache = async (url, cacheKey, isOne = false) => {
  try {
    const lastFetch = localStorage.getItem(`lastFetch_${cacheKey}`);
    const currentTime = Date.now();

    // Check if the data is cached and not expired
    if (lastFetch && currentTime - lastFetch < 60000) { // 120000 milliseconds = 2 minutes
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        return JSON.parse(cachedData);
      }
    }

    // Fetch new data from the API
    const response = await fetch(url);
    const data = await response.json();
    const docs = data.docs ? data.docs : data;
    const returnData = isOne ? docs[0] : docs;

    // Store new data in the cache
    localStorage.setItem(cacheKey, JSON.stringify(returnData));
    localStorage.setItem(`lastFetch_${cacheKey}`, currentTime);

    return returnData;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it outside of this function if needed
  }
};


// Obtener proyecto por slug
export const getProjectBySlug = async (slug) => {
  const url = `${stables.BASE_URL}/projects/by-slug/${slug}`;
  const cacheKey = `project_${slug}`;
  return await fetchDataWithCache(url, cacheKey, true);
};

// Obtener proyectos por tipo
export const getProjectsByType = async (type) => {
  const url = `${stables.BASE_URL}/projects/by-type/${type}`;
  const cacheKey = `projects_${type}`;
  return await fetchDataWithCache(url, cacheKey);
};

// Obtener todos los proyectos
export const getAllProjects = async () => {
  const url = `${stables.BASE_URL}/projects`;
  const cacheKey = 'all_projects';
  return await fetchDataWithCache(url, cacheKey);
};
