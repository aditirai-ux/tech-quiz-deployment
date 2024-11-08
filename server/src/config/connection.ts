import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

const db = async (): Promise<typeof mongoose.connection> => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to the database');
        return mongoose.connection;
    } catch (error) {
        console.error('Could not connect to the database', error);
        throw new Error('Database connection failed');
    }
};
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techquiz');

export default db;
