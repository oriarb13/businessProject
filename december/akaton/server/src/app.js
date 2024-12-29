import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import './config/db.js'; // Establishes DB connection
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(morgan('tiny'));

app.get('/api/status', (req, res) => {
  res.json({ status: 'server is running' });
});

app.use('/api/auth', authRoutes);

export default app;



