const express = require('express')
const morgan = require('morgan')
const favicon = require ('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')
const app = express()
const port = 3000

sequelize.initDb();

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

const playerRouter = require('./src/routes/playerRoutes')
const sessionRouter = require('./src/routes/sessionRoutes')
const clubRouter = require('./src/routes/clubRoutes')

app.use('/players', playerRouter)
app.use('/sessions', sessionRouter)
app.use('/clubs', clubRouter)



app
    .listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))
