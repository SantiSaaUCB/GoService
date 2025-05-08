import { Router } from 'express'
import Usuario from '../models/Usuario.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const router = Router()

// Registro
router.post('/register', async (req, res) => {
  const { nombre, email, password, rol } = req.body
  if (![nombre, email, password, rol].every(v => v)) {
    return res.status(400).json({ msg: 'Todos los campos son obligatorios' })
  }
  if (!['Buscador','Ofertante'].includes(rol)) {
    return res.status(400).json({ msg: 'Rol inválido' })
  }
  try {
    const existe = await Usuario.findOne({ email })
    if (existe) {
      return res.status(400).json({ msg: 'Email ya registrado' })
    }
    const usuario = new Usuario({ nombre, email, password: await bcrypt.hash(password,10), rol })
    await usuario.save()
    return res.status(201).json({ msg: 'Usuario creado correctamente' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ msg: 'Error en el servidor' })
  }
})

// Login
router.post('/login', async (req, res) => {
  const { email, password, rol } = req.body
  if (![email, password, rol].every(v => v)) {
    return res.status(400).json({ msg: 'Todos los campos son obligatorios' })
  }
  try {
    const usuario = await Usuario.findOne({ email })
    if (!usuario) {
      return res.status(400).json({ msg: 'Credenciales inválidas' })
    }
    if (usuario.rol !== rol) {
      return res.status(400).json({ msg: 'Rol incorrecto para este usuario' })
    }
    const valido = await bcrypt.compare(password, usuario.password)
    if (!valido) {
      return res.status(400).json({ msg: 'Credenciales inválidas' })
    }
    const token = jwt.sign(
      { id: usuario._id, nombre: usuario.nombre, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    )
    return res.json({ token })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ msg: 'Error en el servidor' })
  }
})

export default router
