import express from 'express';
import { Category } from '../models/category.model';

const router = express.Router();

// Create a Category
router.post('/categories', async (req, res) => {
    try {
        const { name } = req.body;
        const category = new Category({ name });
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;
