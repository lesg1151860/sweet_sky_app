import { Request, Response } from 'express';
import Topping from '../models/Topping';

// Crear un nuevo topping
export const createTopping = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const topping = await Topping.create({ name });
    res.status(201).json(topping);
  } catch (error) {
    console.error('Error al crear topping:', error);
    res.status(500).json({ message: 'Error al crear el topping' });
  }
};

// Obtener todos los toppings
export const getAllToppings = async (_req: Request, res: Response) => {
  try {
    const toppings = await Topping.findAll();
    res.json(toppings);
  } catch (error) {
    console.error('Error al obtener toppings:', error);
    res.status(500).json({ message: 'Error al obtener los toppings' });
  }
};

// Obtener un topping por ID
export const getToppingById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const topping = await Topping.findByPk(id);
    
    if (!topping) {
      return res.status(404).json({ message: 'Topping no encontrado' });
    }
    
    res.json(topping);
  } catch (error) {
    console.error('Error al obtener topping:', error);
    res.status(500).json({ message: 'Error al obtener el topping' });
  }
};

// Actualizar un topping
export const updateTopping = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, isActive } = req.body;
    
    const topping = await Topping.findByPk(id);
    if (!topping) {
      return res.status(404).json({ message: 'Topping no encontrado' });
    }
    
    await topping.update({ name, isActive });
    res.json(topping);
  } catch (error) {
    console.error('Error al actualizar topping:', error);
    res.status(500).json({ message: 'Error al actualizar el topping' });
  }
};

// Eliminar un topping (desactivar)
export const deleteTopping = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const topping = await Topping.findByPk(id);
    
    if (!topping) {
      return res.status(404).json({ message: 'Topping no encontrado' });
    }
    
    await topping.update({ isActive: false });
    res.json({ message: 'Topping desactivado correctamente' });
  } catch (error) {
    console.error('Error al desactivar topping:', error);
    res.status(500).json({ message: 'Error al desactivar el topping' });
  }
}; 