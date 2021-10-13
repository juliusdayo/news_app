import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.REACT_APP_BASE_URL;

const url = `${baseUrl}/news`;

export const getNews = () => axios.get(url);
export const getNewsToday = (date) => axios.get(`${url}/${date}`);

export const createNews = (newNews) => axios.post(url, newNews);
export const deleteNews = (id) => axios.delete(`${url}/${id}`);
