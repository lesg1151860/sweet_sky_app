import { Request, Response } from 'express';
import Presentation, { IPresentation } from '../models/Presentation';
import Product from '../models/Product';

// Crear una nueva presentación
export const createPresentation = async (req: Request, res: Response) => {
    try {
        const { name, product, description, price, image } = req.body;

        // Verificar si el producto existe y está activo
        const productExists = await Product.findOne({ _id: product, status: true });
        if (!productExists) {
            return res.status(400).json({
                success: false,
                message: 'El producto no existe o no está activo'
            });
        }

        const presentation = new Presentation({
            name,
            product,
            description,
            price,
            image
        });

        await presentation.save();

        res.status(201).json({
            success: true,
            data: presentation
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al crear la presentación',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
};

// Obtener todas las presentaciones
export const getPresentations = async (req: Request, res: Response) => {
    try {
        const presentations = await Presentation.find({ status: true })
            .populate('product', 'name')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: presentations
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener las presentaciones',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
};

// Obtener una presentación por ID
export const getPresentationById = async (req: Request, res: Response) => {
    try {
        const presentation = await Presentation.findOne({
            _id: req.params.id,
            status: true
        }).populate('product', 'name');

        if (!presentation) {
            return res.status(404).json({
                success: false,
                message: 'Presentación no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            data: presentation
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener la presentación',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
};

// Actualizar una presentación
export const updatePresentation = async (req: Request, res: Response) => {
    try {
        const { name, product, description, price, image, status } = req.body;

        // Si se proporciona un nuevo producto, verificar que exista y esté activo
        if (product) {
            const productExists = await Product.findOne({ _id: product, status: true });
            if (!productExists) {
                return res.status(400).json({
                    success: false,
                    message: 'El producto no existe o no está activo'
                });
            }
        }

        const presentation = await Presentation.findByIdAndUpdate(
            req.params.id,
            {
                name,
                product,
                description,
                price,
                image,
                status
            },
            { new: true, runValidators: true }
        ).populate('product', 'name');

        if (!presentation) {
            return res.status(404).json({
                success: false,
                message: 'Presentación no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            data: presentation
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar la presentación',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
};

// Eliminar una presentación (cambio de estado)
export const deletePresentation = async (req: Request, res: Response) => {
    try {
        const presentation = await Presentation.findByIdAndUpdate(
            req.params.id,
            { status: false },
            { new: true }
        );

        if (!presentation) {
            return res.status(404).json({
                success: false,
                message: 'Presentación no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Presentación eliminada correctamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar la presentación',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
}; 