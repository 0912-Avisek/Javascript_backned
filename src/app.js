import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';





const app = express();

app.use( cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
}) );

// this is use for json data in request body
app.use(express.json({limit: "16kb"}) );

// this is use for data comming from url encoded forms
app.use(express.urlencoded({ extended: true }) );

// this is use for serving static files images in pulbic folder 
app.use(express.static("public") );

app.use(cookieParser());


import { userRouter } from './routes/user.routes.js';

app.use('/api/users', userRouter);


export { app };