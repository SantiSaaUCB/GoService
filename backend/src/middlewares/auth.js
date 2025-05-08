import jwt from 'jsonwebtoken'

const verificarToken = (req, res, next) => {
  const token = req.cookies.token
  if (!token) return res.status(401).json({ mensaje: 'Token no provisto' })
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.usuario = payload
    next()
  } catch {
    return res.status(401).json({ mensaje: 'Token inválido' })
  }
}

export default verificarToken
