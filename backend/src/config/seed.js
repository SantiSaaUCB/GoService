import Servicio from '../models/Servicio.js'

const serviciosPredefinidos = [
     {
          titulo: 'Mascotas',
          descripcion: 'Cuidadores profesionales para tus mascotas.',
          categoria: 'Cuidado de Mascotas',
          ubicacion: 'Cochabamba - Bolivia'
     },
     {
          titulo: 'Niños',
          descripcion: 'Cuidadores profesionales para tus hijos.',
          categoria: 'Cuidado de Niños',
          ubicacion: 'Cochabamba'
     },
     {
          titulo: 'Adultos Mayores',
          descripcion: 'Cuidadores profesionales para asistencia y compañía para adultos mayores.',
          categoria: 'Cuidado de Adultos Mayores',
          ubicacion: 'Cochabamba - Bolivia'
     },
     {
          titulo: 'Recados',
          descripcion: 'Personas profesionales para realizar distintos recados, tramites, compras, etc.',
          categoria: 'Recados',
          ubicacion: 'Cochabamba'
     },
     {
          titulo: 'Casas',
          descripcion: 'Cuidadores profesionales para mantenimiento y cuidado de casas.',
          categoria: 'Cuidado de Casas',
          ubicacion: 'Cochabamba - Bolivia'
     },
     {
          titulo: 'Tutorías Académicas',
          descripcion: 'Personas profesionales para clases particulares en diversas materias.',
          categoria: 'Educación',
          ubicacion: 'Cochabamba - Bolivia'
     }
]

const seedServicios = async () => {
const count = await Servicio.countDocuments()
if (count === 0) {
     await Servicio.insertMany(serviciosPredefinidos)
     console.log('Servicios predefinidos cargados')
     }
}

export default seedServicios