import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const DB_URL = process.env.MONGO_URL;

const connectDB = async () =>  {
    try {
        await mongoose.connect(DB_URL, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('success');
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        process.exit(1); // Exit the app if DB connection fails
    }
}

export default connectDB