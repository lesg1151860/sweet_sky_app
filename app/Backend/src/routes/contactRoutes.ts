import express from 'express';
import { createContactMessage, getContactMessages, updateMessageStatus } from '../controllers/contactController';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

// Ruta pública para crear mensajes
router.post('/', createContactMessage);

// Rutas protegidas que requieren autenticación
router.get('/', authenticateToken, getContactMessages);
router.patch('/:id/status', authenticateToken, updateMessageStatus);

export default router; 