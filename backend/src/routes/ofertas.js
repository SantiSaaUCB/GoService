import express from 'express';
import Oferta from '../models/Oferta.js';

const router = express.Router();

// POST: crear una nueva oferta
router.post('/', async (req, res) => {
  try {
    const nuevaOferta = new Oferta(req.body);
    await nuevaOferta.save();
    res.status(201).json({ mensaje: 'Oferta creada con éxito', data: nuevaOferta });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al guardar la oferta', error: error.message });
  }
});

// Obtener ofertas por categoría (ej: /api/ofertas/categoria/carpinteria)
router.get('/categoria/:categoria', async (req, res) => {
    const { categoria } = req.params;
    try {
      const ofertas = await Oferta.find({ categoria: { $regex: new RegExp(categoria, 'i') } });
      res.json(ofertas);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener ofertas por categoría', error: error.message });
    }
  });
  

export default router;
