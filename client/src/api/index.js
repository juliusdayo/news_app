import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const base_url = process.env.REACT_APP_BASE_URL;

const url = `${base_url}/news`;

export const getNews = () => axios.get(url);
export const createNews = (newNews) => axios.post(url, newNews);
