import mongoose from 'mongoose';


const newsModel = mongoose.Schema({
    Headline: String,
    Content: String,
    FeatureImage: String,
    StartDate:{
        type:Date,
        default: new Date()
    },
    DatePosted:{
        type:Date,
        default:new Date()
    },
    PostedBy: String
})

const NewsModel = mongoose.model('NewsModel', newsModel);

export default NewsModel;