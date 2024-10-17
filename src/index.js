// src/index.js
const express = require('express');
const app = express();
const TaskRoutes = require('./routes/TaskRoutes');

// Middleware para JSON
app.use(express.json());

// Usar as rotas de tarefas
app.use('/task', TaskRoutes);

// Test route
app.get('/teste', (req, res) => {
    res.send("Hello");
});

const port = 3000;
app.listen(port, () => {
    console.log('API online ok');
});
