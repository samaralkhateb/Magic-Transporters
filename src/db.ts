// db.ts
import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
  try {
    const MONGO_URL = 'mongodb+srv://admin:admin@cluster0.lpfsgjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


    mongoose.Promise = Promise;
    mongoose.connect(MONGO_URL);
    mongoose.connection.on('error', (error: Error) => console.log(error));

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
