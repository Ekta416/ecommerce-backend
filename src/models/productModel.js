
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        minlength: [3, 'Product name must be at least 3 characters long'],
        maxlength: [100, 'Product name must be less than 100 characters long']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0.01, 'Price must be a positive number'] 
    },
    stock: {
        type: Number,
        required: [true, 'Stock quantity is required'],
        min: [0, 'Stock cannot be negative'], 
        default: 0
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required']
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
