import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import conectarDB from './config/db.js';

import usuarioRoutes from './routes/auth.js';
import servicioRoutes from './routes/servicios.js';
import ofertaRoutes from './routes/ofertas.js';

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

conectarDB();

app.use('/api/auth', usuarioRoutes);
app.use('/api/servicios', servicioRoutes);
app.use('/api/ofertas', ofertaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
