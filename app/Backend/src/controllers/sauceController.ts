import { Request, Response } from 'express';
import Sauce from '../models/Sauce';

// Crear una nueva salsa
export const createSauce = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const sauce = await Sauce.create({ name });
    res.status(201).json(sauce);
  } catch (error) {
    console.error('Error al crear salsa:', error);
    res.status(500).json({ message: 'Error al crear la salsa' });
  }
};

// Obtener todas las salsas
export const getAllSauces = async (_req: Request, res: Response) => {
  try {
    const sauces = await Sauce.findAll();
    res.json(sauces);
  } catch (error) {
    console.error('Error al obtener salsas:', error);
    res.status(500).json({ message: 'Error al obtener las salsas' });
  }
};

// Obtener una salsa por ID
export const getSauceById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const sauce = await Sauce.findByPk(id);
    
    if (!sauce) {
      return res.status(404).json({ message: 'Salsa no encontrada' });
    }
    
    res.json(sauce);
  } catch (error) {
    console.error('Error al obtener salsa:', error);
    res.status(500).json({ message: 'Error al obtener la salsa' });
  }
};

// Actualizar una salsa
export const updateSauce = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, isActive } = req.body;
    
    const sauce = await Sauce.findByPk(id);
    if (!sauce) {
      return res.status(404).json({ message: 'Salsa no encontrada' });
    }
    
    await sauce.update({ name, isActive });
    res.json(sauce);
  } catch (error) {
    console.error('Error al actualizar salsa:', error);
    res.status(500).json({ message: 'Error al actualizar la salsa' });
  }
};

// Eliminar una salsa (desactivar)
export const deleteSauce = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const sauce = await Sauce.findByPk(id);
    
    if (!sauce) {
      return res.status(404).json({ message: 'Salsa no encontrada' });
    }
    
    await sauce.update({ isActive: false });
    res.json({ message: 'Salsa desactivada correctamente' });
  } catch (error) {
    console.error('Error al desactivar salsa:', error);
    res.status(500).json({ message: 'Error al desactivar la salsa' });
  }
}; 