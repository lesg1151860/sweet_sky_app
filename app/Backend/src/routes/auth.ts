import { Router } from 'express';
import { login, logout, checkSession, register, googleLogin } from '../controllers/authController';
import { authMiddleware } from '../middlewares/auth';

const router = Router();

// Rutas públicas
router.post('/register', register);
router.post('/login', login);
router.post('/google-login', googleLogin);

// Rutas protegidas
router.post('/logout', authMiddleware, logout);
router.get('/check-session', authMiddleware, checkSession);

export default router; 