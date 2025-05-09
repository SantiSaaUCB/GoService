import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const atlasUri = "mongodb+srv://Santi:21Santi03Saa04@cluster0.7o0uh.mongodb.net/goservice?retryWrites=true&w=majority&appName=Cluster0";
const localUri = process.env.MONGODB_LOCAL_URI || 'mongodb://127.0.0.1:27017/GoServiceDB';
const uri = atlasUri;

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
