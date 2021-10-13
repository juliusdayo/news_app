import express from 'express';

//controllers
import {getNews,createNews,deleteNews,getNewsToday} from '../controllers/news.js';

const router = express.Router();


router.get('/', getNews)
router.get('/:date', getNewsToday)
router.post('/', createNews)
router.delete('/:id', deleteNews)

export default router;