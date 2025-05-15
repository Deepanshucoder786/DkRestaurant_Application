import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbconnection } from './Database/dbconnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();

dotenv.config({ path: './config/.env' });

//  CORS Configuration 
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // adjust if needed
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/reservation', reservationRouter);

// DB
dbconnection();

// Global error handler
app.use(errorMiddleware);

export default app;
