import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import Usuario from '../models/Usuario.js'

const opts = {
     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
     secretOrKey: process.env.JWT_SECRET
}

passport.use(
     new JwtStrategy(opts, async (payload, done) => {
          try {
               const usuario = await Usuario.findById(payload.id)
               if (usuario) return done(null, usuario)
               return done(null, false)
          } catch (error) {
               return done(error, false)
          }
     })
)

export default passport