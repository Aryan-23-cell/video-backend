import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

// Understanding the json data and urlencoded data {url data is form data} and static files storage in public folder
app.use(express.json({limit: '16kb'}));
app.use(express.urlencoded({extended: true, limit: '16kb'}));
app.use(express.static("public"));
// cookieParser is used to parse cookies attached to the client request object
app.use(cookieParser());


export { app };
