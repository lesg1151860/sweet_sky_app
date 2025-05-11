import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, UserRole } from '../models/User';

const users: User[] = []; // Simulación de base de datos en memoria

// Registro de cliente
export const register = (req: Request, res: Response) => {
  const { nombre, correo, password } = req.body;
  if (!nombre || !correo || !password) {
    res.status(400).json({ message: 'Todos los campos son obligatorios' });
    return;
  }
  const userExists = users.find(u => u.correo === correo);
  if (userExists) {
    res.status(400).json({ message: 'El correo ya está registrado' });
    return;
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser: User = {
    id: (users.length + 1).toString(),
    nombre,
    correo,
    password: hashedPassword,
    rol: 'CLIENTE'
  };
  users.push(newUser);
  res.status(201).json({ message: 'Usuario registrado correctamente' });
  return;
};

// Login
export const login = (req: Request, res: Response) => {
  const { correo, password } = req.body;
  const user = users.find(u => u.correo === correo);
  if (!user) {
    res.status(400).json({ message: 'Correo o contraseña incorrectos' });
    return;
  }
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    res.status(400).json({ message: 'Correo o contraseña incorrectos' });
    return;
  }
  const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
  res.json({ token, user: { id: user.id, nombre: user.nombre, correo: user.correo, rol: user.rol } });
  return;
};

// Recuperar contraseña (simulado)
export const recoverPassword = (req: Request, res: Response) => {
  const { correo } = req.body;
  const user = users.find(u => u.correo === correo);
  if (!user) {
    res.status(400).json({ message: 'No existe un usuario con ese correo' });
    return;
  }
  // Aquí normalmente enviarías un correo con un enlace de recuperación
  res.json({ message: 'Se ha enviado un correo de recuperación (simulado)' });
  return;
}; 