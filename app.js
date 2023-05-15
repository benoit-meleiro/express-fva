const express = require('express')
const morgan = require('morgan')
const favicon = require ('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')
const {initDb} = require('./src/db/sequelize')
const app = express()
const port = 3000

sequelize.initDb();

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

app
    .listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))
