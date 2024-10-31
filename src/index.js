// src/index.js
const express = require('express');
const cors = require('cors')
const app = express();
const TaskRoutes = require('./routes/TaskRoutes');

app.use(cors());
// Middleware para JSON
app.use(express.json());


// Usar as rotas de tarefas
app.use('/task', TaskRoutes);

// Test route
app.get('/teste', (req, res) => {
    res.send("Hello");
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log('API online ok');
});
