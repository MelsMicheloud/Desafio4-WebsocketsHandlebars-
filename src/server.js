import express from 'express'
import userRoutes from './routes/users.routes.js'
import cartRoutes from './routes/carts.routes.js'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'

const server = express()
const PORT = 8080

server.use(express.static("src/public"))
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use('/api/users', userRoutes)
server.use('/api/carts', cartRoutes)
//falta
//motor para servir plantilla

server.engine('handlebars', handlebars.engine())
server.set('views', 'src/views')
server.set('view engine', 'handlebars')

//http:
server.get('/',(req, res) => {
    res.render('index', {})
})


const httpServer = server.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${PORT}`)
})

//socket del lado del server
const io = new Server(httpServer)

io.on('connection', socket =>{ //detecta cuando se conecta el cliente
    console.log("Cliente conectado")

})



