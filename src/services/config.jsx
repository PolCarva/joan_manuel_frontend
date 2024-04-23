// services/config.js

import { stables } from "../constants/stables";

// Función genérica para obtener datos de la API con caching
export const fetchDataWithCache = async (url, cacheKey) => {
  try {
    const lastFetch = localStorage.getItem(`lastFetch_${cacheKey}`);
    const currentTime = Date.now();

    // Check if the data is cached and not expired
    if (lastFetch && currentTime - lastFetch < 60000) {
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        return JSON.parse(cachedData);
      }
    }

    // Fetch new data from the API
    const response = await fetch(url);
    const data = await response.json();
    const docs = data.docs ? data.docs : data;
    const isOne = docs.length === 1;
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


// Obtener configuración por tipo
export const getConfigByType = async (type) => {
  const url = `${stables.BASE_URL}/config/by-type/${type}`;
  const cacheKey = `config_${type}`;
  return await fetchDataWithCache(url, cacheKey);
};
