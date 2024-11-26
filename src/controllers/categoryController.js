const Category = require('../models/categoryModel');
const Product = require('../models/productModel');

// Create Category
exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get All Categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Category by ID (with Products)
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });

        const products = await Product.find({ categoryId: category._id });
        res.status(200).json({ category, products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Category
exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) return res.status(404).json({ message: 'Category not found' });

        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Category (mark Products uncategorized)
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });

        await Product.updateMany({ categoryId: req.params.id }, { categoryId: null });
        res.status(200).json({ message: 'Category deleted and products marked uncategorized' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
