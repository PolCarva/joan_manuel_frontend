const isDev = process.env.NODE_ENV === 'development';
const BASE_URL = isDev ? 'http://localhost:3000/api' : 'https://joanmanuel.up.railway.app/api';
const MEDIA_URL = isDev ? 'http://localhost:3000/media' : 'https://joanmanuel.up.railway.app/media';

export const stables = {
    BASE_URL,
    MEDIA_URL,
}