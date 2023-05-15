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

// toutes mes points de terminaisons    
require('./src/controllers/findAllPlayers')(app) 
require('./src/controllers/findPlayerByPk')(app) 
require('./src/controllers/createPlayer')(app) 
require('./src/controllers/updatePlayer')(app) 
require('./src/controllers/deletePlayer')(app) 


// const playerRouter = require('./src/routes/playerRoutes')
// const sessionRouter = require('./src/routes/sessionRoutes')
// const clubRouter = require('./src/routes/clubRoutes')

// app.use('/api/players', playerRouter)
// app.use('/api/sessions', sessionRouter)
// app.use('/api/clubs', clubRouter)



app
    .listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))
