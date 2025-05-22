import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Generar token JWT
const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '30d',
  });
};

// Registro de usuario
export const register = async (req: Request, res: Response) => {
  try {
    const { name, lastName, email, password, phone, address } = req.body;

    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear nuevo usuario
    const user = await User.create({
      name,
      lastName,
      email,
      password,
      phone,
      address,
    });

    // Generar token
    const token = generateToken(user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Login de usuario
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Verificar contraseña
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar token
    const token = generateToken(user._id);

    res.json({
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Login con Google
export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(400).json({ message: 'Token de Google inválido' });
    }

    const { email, name, sub: googleId } = payload;

    // Buscar o crear usuario
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        name,
        lastName: '',
        email,
        password: Math.random().toString(36).slice(-8),
        phone: '',
        address: '',
        googleId,
      });
    }

    // Generar token
    const jwtToken = generateToken(user._id);

    res.json({
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      token: jwtToken,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener perfil del usuario
export const getProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    // En una implementación real, podrías invalidar el token en una lista negra
    // Para este ejemplo, simplemente devolvemos un mensaje de éxito
    res.json({ message: 'Sesión cerrada exitosamente' });
  } catch (error) {
    console.error('Error en logout:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const checkSession = async (req: Request, res: Response) => {
  try {
    // Si el middleware de autenticación pasó, significa que la sesión es válida
    const user = await User.findByPk(req.user?.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({
      message: 'Sesión válida',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error al verificar sesión:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
}; 