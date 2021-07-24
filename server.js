const express = require('express')
const server = express()
const port = 3000


// Connecting index to the server.js
server.set('views', 'views')
server.set('view engine', 'ejs')

//Boilerplates
server.use(express.static('public'))
server.use(express.static(__dirname+'/image'))

// Connecting router to the server.js
const router = require('./router')

server.use('/', router) // Index

server.listen(port, () => {
    console.log(`Server is running...`)
})