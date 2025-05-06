const express = require('express');
const Servicio = require('../models/Servicio');
const router = express.Router();

// GET /api/servicios
router.get('/', async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener servicios', details: err.message });
  }
});

// POST /api/servicios
router.post('/', async (req, res) => {
  try {
    const nuevo = new Servicio(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar servicio', details: err.message });
  }
});

// DELETE todos los servicios
router.delete('/', async (req, res) => {
  try {
    await Servicio.deleteMany({});
    res.json({ mensaje: 'Todos los servicios han sido eliminados' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar servicios' });
  }
});

module.exports = router;
