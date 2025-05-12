import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth';
import {
  createSauce,
  getAllSauces,
  getSauceById,
  updateSauce,
  deleteSauce,
} from '../controllers/sauceController';

const router = Router();

// Todas las rutas requieren autenticación
router.use(authMiddleware);

router.post('/', createSauce);
router.get('/', getAllSauces);
router.get('/:id', getSauceById);
router.put('/:id', updateSauce);
router.delete('/:id', deleteSauce);

export default router; 