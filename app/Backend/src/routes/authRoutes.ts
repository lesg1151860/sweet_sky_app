import express from 'express';
import {
  register,
  login,
  googleLogin,
  getProfile,
} from '../controllers/authController';
import { protect } from '../middleware/auth';

const router = express.Router();

// Rutas públicas
router.post('/register', register);
router.post('/login', login);
router.post('/google-login', googleLogin);

// Rutas protegidas
router.get('/profile', protect, getProfile);

export default router; 