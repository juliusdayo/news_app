import NewsModel from "../models/newsModel"


export const getNews = async (req,res) =>{
    try {
        const news = await NewsModel.find();
        
        res.status(200).json(news);
    } catch (error) {
        res.status(404)
    }
}

export const createNews = (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}