import { Router } from 'express';
import { register, login, getProfile } from '../controllers/userController';
import { authMiddleware } from '../middlewares/auth';

const router = Router();

// Rutas públicas
router.post('/register', register);
router.post('/login', login);

// Rutas protegidas
router.get('/profile', authMiddleware, getProfile);

export default router; 