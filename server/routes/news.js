import express from 'express';

//controllers
import {getNews,createNews} from '../controllers/news.js';

const router = express.Router();


router.get('/', getNews)
router.post('/', createNews)

export default router;