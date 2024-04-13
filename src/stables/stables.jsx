const LOCAL_URL = "http://localhost:5000/";
const PRODUCTION_URL = "";

const isProduction = import.meta.env.VITE_NODE_ENV === "production";

const BASE_URL = isProduction ? PRODUCTION_URL : LOCAL_URL;

const UPLOAD_FOLDER_BASE_URL = `${BASE_URL}uploads/`;

const stables = {
  UPLOAD_FOLDER_BASE_URL,
  BASE_URL,
};

export default stables;
