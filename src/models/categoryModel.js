
const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Category name is required'],
        unique: true, 
        minlength: [3, 'Category name must be at least 3 characters long'],
        maxlength: [100, 'Category name must be less than 100 characters long']
    },
    description: {
        type: String,
        maxlength: [500, 'Description must be less than 500 characters long']
    }
}, { timestamps: true });

categorySchema.index({ name: 1 }, { unique: true });

module.exports = mongoose.model('Category', categorySchema);
