
import { stables } from "../constants/stables";


export const getConfigByType = async (type) => {
  try {
    const response = await fetch(`${stables.BASE_URL}/config/by-type/${type}`);
    const projects = await response.json();
    const docs = projects.docs;
    return docs[0];
  } catch (error) {
    console.error(error);
  }
};


