import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import newsRoutes from './routes/news.js'

dotenv.config();
const app  = express();

app.use(express.json({ limit: "30mb",extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.use('/news', newsRoutes);



const CONNECTION_URL = process.env.MONGODB_URI; 

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
        .then(() => app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
        .catch((error) => console.log(error.message));
