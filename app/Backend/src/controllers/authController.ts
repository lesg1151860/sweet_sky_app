import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear nuevo usuario
    const user = await User.create({
      name,
      email,
      password,
      role: 'user' // Por defecto, los usuarios registrados son 'user'
    });

    // Generar token JWT
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '20m' }
    );

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario por email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Verificar contraseña
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar token JWT con expiración de 20 minutos
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '20m' }
    );

    res.json({
      message: 'Inicio de sesión exitoso',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    
    // Verificar el token de Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(401).json({ message: 'Token de Google inválido' });
    }

    const { email, name, sub: googleId } = payload;

    // Buscar o crear usuario
    let user = await User.findOne({ 
      where: { 
        [Op.or]: [
          { email },
          { googleId }
        ]
      }
    });

    if (!user) {
      // Crear nuevo usuario con Google
      user = await User.create({
        name,
        email,
        googleId,
        role: 'user' // Por defecto, los usuarios de Google son 'user'
      });
    } else if (!user.googleId) {
      // Actualizar usuario existente con googleId
      user.googleId = googleId;
      await user.save();
    }

    // Generar token JWT
    const jwtToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '20m' }
    );

    res.json({
      message: 'Inicio de sesión con Google exitoso',
      token: jwtToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error en login con Google:', error);
    res.status(500).json({ message: 'Error en el servidor' });
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