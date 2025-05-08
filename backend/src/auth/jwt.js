import jwt from 'jsonwebtoken'

export const generarToken = usuario => {
     return jwt.sign(
          { id: usuario._id, correo: usuario.correo },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
     )
}