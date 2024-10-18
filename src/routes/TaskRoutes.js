// src/routes/TaskRoutes.js
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const TaskValidation = require('../middlewares/TaskValidation')
const MacaddressValidation = require('../middlewares/MacadressValidation')

// Rota para criar uma tarefa
router.post('/', TaskValidation, TaskController.create);
// Rota para alterar tarefas
router.put('/:id', TaskValidation, TaskController.update);
// Rota para listar tarefas 
router.get('/:id', TaskController.show);
// Rota para apagar tarefas 
router.delete('/:id', TaskController.delete);
// Rota para atualizar tarefas finalizadas : done
router.put('/:id/:done', MacaddressValidation, TaskController.done);

// Rota para listar tarefas
router.get('/filter/all', TaskController.all);
// Rota para atualizar tarefas atrasadas : atrasadas
router.get('/filter/late', MacaddressValidation, TaskController.late);
// Rota para atualizar tarefas do dia
router.get('/filter/today', MacaddressValidation, TaskController.today);
// Rota para atualizar tarefas do mes
router.get('/filter/week', MacaddressValidation, TaskController.week);
// Rota para atualizar tarefas do ano
router.get('/filter/month', MacaddressValidation, TaskController.month);
// Rota para atualizar tarefas do ano
router.get('/filter/year', MacaddressValidation, TaskController.year);



module.exports = router;
