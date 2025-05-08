import mongoose from 'mongoose'

const servicioSchema = new mongoose.Schema(
     {
          titulo:      { type: String, required: true },
          descripcion: { type: String, required: true },
          categoria:   { type: String, required: true },
          ubicacion:   { type: String, required: true }
     },
     { timestamps: true }
)

export default mongoose.model('Servicio', servicioSchema)