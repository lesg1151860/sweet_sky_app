import { Request, Response } from 'express';
import ContactMessage from '../models/ContactMessage';

export const createContactMessage = async (req: Request, res: Response) => {
  try {
    const { nombre, email, telefono, mensaje } = req.body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({
        success: false,
        message: 'Por favor, complete todos los campos requeridos',
      });
    }

    // Crear nuevo mensaje
    const newMessage = new ContactMessage({
      nombre,
      email,
      telefono,
      mensaje,
    });

    // Guardar mensaje
    await newMessage.save();

    res.status(201).json({
      success: true,
      message: 'Mensaje enviado exitosamente',
      data: newMessage,
    });
  } catch (error) {
    console.error('Error al crear mensaje de contacto:', error);
    res.status(500).json({
      success: false,
      message: 'Error al procesar el mensaje',
      error: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
};

export const getContactMessages = async (req: Request, res: Response) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error('Error al obtener mensajes:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener los mensajes',
      error: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
};

export const updateMessageStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pendiente', 'leído', 'respondido'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Estado no válido',
      });
    }

    const updatedMessage = await ContactMessage.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedMessage) {
      return res.status(404).json({
        success: false,
        message: 'Mensaje no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      data: updatedMessage,
    });
  } catch (error) {
    console.error('Error al actualizar estado del mensaje:', error);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el estado del mensaje',
      error: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
}; 