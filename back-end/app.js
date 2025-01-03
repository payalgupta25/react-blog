import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
// const PORT = process.env.PORT || 8080

// app.use(cors({ origin: 'true', credentials: true }));
// uncomment the cors above when testing it locally and comment the one below. 
// make sure you reverse the changes being made when you about to make a PR
app.use(cors({ origin: 'https://react-blog-lake-omega.vercel.app', credentials: true }));

app.use(express.json({extend: false}));



// app.use("/",(req,res)=>{res.send('express running , mongo running')})
//routes importing
import {userRouter} from "./routes/user.routes.js"
import { articleRouter } from './routes/article.routes.js';

//routes declare
app.use("/api/auth",userRouter)
app.use("/api/article",articleRouter)
export {app}