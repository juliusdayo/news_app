import express from 'express';

//controllers
import {getNews,createNews,deleteNews} from '../controllers/news.js';

const router = express.Router();


router.get('/', getNews)
router.post('/', createNews)
router.delete('/:id', deleteNews)

export default router;