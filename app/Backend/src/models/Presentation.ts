import { Schema, model, Document } from 'mongoose';

export interface IPresentation extends Document {
    name: string;
    product: Schema.Types.ObjectId;
    description: string;
    price: number;
    image: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const presentationSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'El producto es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: [0, 'El precio no puede ser negativo']
    },
    image: {
        type: String,
        required: [true, 'La imagen es obligatoria']
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Índices para mejorar el rendimiento de las búsquedas
presentationSchema.index({ name: 1 });
presentationSchema.index({ product: 1 });
presentationSchema.index({ status: 1 });

export default model<IPresentation>('Presentation', presentationSchema); 