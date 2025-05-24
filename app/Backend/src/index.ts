import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import sauceRoutes from './routes/sauceRoutes';
import toppingRoutes from './routes/toppingRoutes';
import productRoutes from './routes/productRoutes';
import presentationRoutes from './routes/presentationRoutes';
import contactRoutes from './routes/contactRoutes';
import { testConnection } from './config/database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Probar conexión a la base de datos
testConnection();

// Ruta de prueba
app.get('/', (_req, res) => {
  res.send('¡Bienvenido a Sweet Sky Backend!');
});

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/sauces', sauceRoutes);
app.use('/api/toppings', toppingRoutes);
app.use('/api/products', productRoutes);
app.use('/api/presentations', presentationRoutes);
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});