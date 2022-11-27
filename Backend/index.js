const express = require('express');
const cors = require('cors');

const temas = require('./src/routes/temas.routes');
const publicacoes = require('./src/routes/publicacoes.routes');
const respostas = require('./src/routes/respostas.routes');
const respostasRes = require('./src/routes/respostasRes.routes');
const favoritos = require('./src/routes/favoritos.routes');

const app = express()
    .use(express.json())
    .use(cors())
    .use(temas)
    .use(publicacoes)
    .use(respostas)
    .use(respostasRes)
    .use(favoritos)

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});