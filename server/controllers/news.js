import NewsModel from "../models/newsModel.js"


export const getNews = async (req,res) =>{
    try {
        const news = await NewsModel.find();
        
        res.status(200).json(news)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const createNews = async (req,res)=>{
    const news = req.body;

    const createdNews = new NewsModel(news)
    
    try {
        await createdNews.save()
        
        res.status(201).json(createdNews)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}