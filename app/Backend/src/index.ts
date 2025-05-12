import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
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

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});