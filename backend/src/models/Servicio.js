const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true,
    enum: ['Cuidado de Niños', 'Cuidado de Mascotas', 'Cuidado de Adultos', 'Recados', 'Cuidado de Casas', 'Otro']
  },
  ubicacion: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Servicio', servicioSchema);
