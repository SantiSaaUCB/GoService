import { Router } from 'express'
import Servicio from '../models/Servicio.js'
import verificarToken from '../middlewares/auth.js'

const router = Router()

// GET público
router.get('/', async (req, res) => {
  const lista = await Servicio.find()
  res.json(lista)
})

// Ruta protegida de prueba
router.get('/privado', verificarToken, (req, res) => {
  res.json({
    mensaje: 'Acceso concedido a ruta protegida',
    usuario: req.usuario
  })
})

// Exportamos el router como default
export default router
