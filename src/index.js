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
    res.send("Hello world");
});

app.get('/capture-mac', (req, res) => {
    const userIP = req.ip;
    const userAgent = req.headers['user-agent'];
    console.log(`Dispositivo acessado IP: ${userIP}, Agente de Usuário: ${userAgent}`);
    res.send('MAC Address Capturado!');
});

const port = process.env.PORT || 3001;
app.listen(port, '0.0.0.0', () => {
    console.log(`API online na porta ${port}`);
});
