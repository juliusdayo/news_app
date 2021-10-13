import mongoose from 'mongoose';
import NewsModel from "../models/newsModel.js"


export const getNews = async (req,res) =>{
    try {
        const news = await NewsModel.find();
        
        res.status(200).json(news)
    } catch (error) {
        console.log(error)
        res.status(404).json({message:error})
    }
}

export const getNewsToday = async(req,res)=>{
    try {
        const news = await NewsModel.find({
            DatePosted:{
                $gte: new Date().toLocaleDateString(),

            }
        });
    } catch (error) {
        console.log(error)
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

export const deleteNews = async (req,res)=>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('It ain\'t a mongoose model');

    await NewsModel.findByIdAndDelete(id);

    res.json({mesage: 'Deleted Successfully'})

}