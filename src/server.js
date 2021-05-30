const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

//usando template engine
server.set('view engine', 'ejs')

//mudar a localização da pasta  views
server.set('views', path.join(__dirname, 'views'))

//Habilitar arquivos staticos
server.use(express.static("public"))

//usar o req. body
server.use(express.urlencoded({ extended: true}))

// Routes
server.use(routes)

server.set('port', process.env.PORT || 3000)

server.listen(server.get('port'), () => console.log(`Está rodando na porta: ${server.get('port')}`))




