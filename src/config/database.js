
const mongoose = require('mongoose');
const MONGO_URI="mongodb+srv://ektapatidar416:e-commerce@cluster0.g2ttojp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    try {
        console.log('MONGO_URI:',MONGO_URI); 
        if (!MONGO_URI) {
            throw new Error('MONGO_URI is not defined in .env file');
            
        }

        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
