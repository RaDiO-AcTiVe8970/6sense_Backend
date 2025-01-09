import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    discount: number;
    image: string;
    status: 'In Stock' | 'Stock Out';
    productCode: string;
    category: mongoose.Schema.Types.ObjectId;
}

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    image: { type: String },
    status: { type: String, enum: ['In Stock', 'Stock Out'], default: 'In Stock' },
    productCode: { type: String, required: true, unique: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
});

export const Product = mongoose.model<IProduct>('Product', ProductSchema);
