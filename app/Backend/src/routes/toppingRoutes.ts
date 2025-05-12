import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth';
import {
  createTopping,
  getAllToppings,
  getToppingById,
  updateTopping,
  deleteTopping,
} from '../controllers/toppingController';

const router = Router();

// Todas las rutas requieren autenticación
router.use(authMiddleware);

router.post('/', createTopping);
router.get('/', getAllToppings);
router.get('/:id', getToppingById);
router.put('/:id', updateTopping);
router.delete('/:id', deleteTopping);

export default router; 