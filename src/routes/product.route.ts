import express, { Request, Response } from 'express';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { generateProductCode } from '../utils/productCode.util';

const router = express.Router();

// Create a Product
router.post('/products/addProducts', async (req: Request, res: Response) => {
    try {
        const { name, description, price, discount, image, status, categoryId } = req.body;

        // Check if category exists
        const category = await Category.findById(categoryId);
        if (!category) {
            res.status(400).json({ error: 'Invalid category ID' });
            return;
        }
        

        // Generate product code
        const productCode = generateProductCode(name);

        const product = new Product({
            name,
            description,
            price,
            discount,
            image,
            status,
            productCode,
            category: categoryId,
        });

        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Update a Product
router.put('/products/updateProduct/:id', async (req : Request, res : Response) => {
    try {
        const { status, description, discount } = req.body;

        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }

        if (status) product.status = status;
        if (description) product.description = description;
        if (discount !== undefined) product.discount = discount;

        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Get Products with Filters
router.get('/products/getAllProducts', async (req: Request, res: Response) => {
    try {
        const { category, search } = req.query as { category?: string; search?: string };
        const filter: Record<string, any> = {};

        if (category) {
            const categoryEntity = await Category.findOne({ name: category });
            if (categoryEntity) {
                filter.category = categoryEntity._id;
            }
        }

        if (search) {
            filter.name = { $regex: search, $options: 'i' };
        }

        const products = await Product.find(filter).populate('category');

        // Add final price calculation
        const result = products.map((product) => ({
            ...product.toObject(),
            finalPrice: product.price - product.price * (product.discount / 100),
        }));

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;
