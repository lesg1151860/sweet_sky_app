import { Router } from 'express';
import {
    createPresentation,
    getPresentations,
    getPresentationById,
    updatePresentation,
    deletePresentation
} from '../controllers/presentationController';
import { validateToken } from '../middlewares/auth';

const router = Router();

// Todas las rutas requieren autenticación
router.use(validateToken);

// Rutas para presentaciones
router.post('/', createPresentation);
router.get('/', getPresentations);
router.get('/:id', getPresentationById);
router.put('/:id', updatePresentation);
router.delete('/:id', deletePresentation);

export default router; 