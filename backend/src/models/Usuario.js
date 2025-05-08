import mongoose from 'mongoose'
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    required: true,
    enum: ['Buscador','Ofertante']
  }
}, {
  timestamps: true
})
const Usuario = mongoose.model('Usuario', usuarioSchema)
export default Usuario
