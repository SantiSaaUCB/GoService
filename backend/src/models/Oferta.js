import mongoose from 'mongoose';

const ofertaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  ci: { type: String, required: true, unique: true },
  ubicacion: { type: String },
  telefono: { type: String },
  redesSociales: { type: String },
  experiencia: { type: String },
  precio: { type: String },
  otros: { type: String },
  categoria: {type: String}
}, {
  timestamps: true
});

const Oferta = mongoose.model('Oferta', ofertaSchema);

export default Oferta;
