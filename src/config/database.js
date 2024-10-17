// src/config/database.js
const mongoose = require('mongoose');

const url = 'mongodb+srv://adrianoocf:A004198461a@clustertask.hbwte.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTask';

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
