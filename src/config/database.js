// src/config/database.js
const mongoose = require('mongoose');
require('dotenv').config();

//const url = 'mongodb+srv://adrianoocf:A004198461a@clustertask.hbwte.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTask';

const url = process.env.DATABASE_URL; // Usa a variável de ambiente

mongoose.connect(url, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso!');
})
.catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
});

module.exports = mongoose;
