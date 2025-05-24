import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
  },
  mensaje: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pendiente', 'leído', 'respondido'],
    default: 'pendiente',
  },
});

export default mongoose.models.ContactMessage || mongoose.model('ContactMessage', contactMessageSchema); 