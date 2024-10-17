// src/routes/TaskRoutes.js
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const TaskValidation = require('../middlewares/TaskValidation')
const MacaddressValidation = require('../middlewares/MacadressValidation')

// Rota para criar uma tarefa
router.post('/', TaskValidation, TaskController.create);

// Rota para listar tarefas
router.put('/:id', TaskValidation, TaskController.update);

// Rota para listar tarefas especificas
router.get('/:id', TaskController.show);

// Rota para listar tarefas
router.get('/filter/all', MacaddressValidation, TaskController.all);

module.exports = router;
