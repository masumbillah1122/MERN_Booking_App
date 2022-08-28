import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import hotelsRoutes from "./routes/hotels.js";
import usersRoutes from "./routes/users.js";
import roomsRoutes from "./routes/rooms.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';

//Create Port for  Backend
const app = express();

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connection");
    } catch (error) {
        throw error;
    }
}

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/rooms", roomsRoutes);

app.listen(5000, () => {
    connect();
    console.log('Connected!');
});