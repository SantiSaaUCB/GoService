import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const atlasUri = process.env.MONGODB_URI;
const localUri = process.env.MONGODB_LOCAL_URI || 'mongodb://127.0.0.1:27017/GoServiceDB';
const uri = process.env.NODE_ENV === 'production' ? atlasUri : localUri;

const conectarDB = async () => {
  try {
    console.log(`USANDO MONGODB URI: ${uri}`);
    await mongoose.connect(uri);
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error al conectar MongoDB', error);
    process.exit(1);
  }
};

export default conectarDB;
