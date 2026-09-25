import express from "express";
import authRoutes from './router.js';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from "./routes/userroutes.js";
import multer from "multer";
import axios from 'axios';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Use your routes
app.use('/', authRoutes);
app.use('/api',userRouter);


// MongoDB Connection
mongoose.connect('mongodb+srv://raunit1995:VxUB9coLo2CVgWfw@cluster0.6hl1urk.mongodb.net/results', {

  
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const port = 5000;
app.listen(port,async () => {
  console.log(`Listening on port ${port}`);
  
});
