require('dotenv').config();
const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const user = require('./src/routes/user.routes')
const temas = require('./src/routes/temas.routes');
const publicacoes = require('./src/routes/publicacoes.routes');
const respostas = require('./src/routes/respostas.routes');
const respostasRes = require('./src/routes/respostasRes.routes');
const favoritos = require('./src/routes/favoritos.routes');

const app = express()
    .use(express.json())
    .use(cors())
    .use(user)
    .use(temas)
    .use(publicacoes)
    .use(respostas)
    .use(respostasRes)
    .use(favoritos)

app.listen(PORT, () => {
    console.log('Servido em execução na porta ' + PORT);
});