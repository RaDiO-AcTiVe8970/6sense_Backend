import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productRoutes from './routes/product.route';
import categoryRoutes from './routes/category.route';

const app = express();

app.use(bodyParser.json());
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);

mongoose
  .connect(process.env.MONGO_URI || '')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

export default app;
