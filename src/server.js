import express from 'express'
import productsRoutes from './routes/products.routes.js'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import viewsRoutes from './routes/views.routes.js'
import { Server } from 'socket.io'
import socketProducts from './listeners/socketProducts.js'

const server = express()
const PORT = 8080

//rutas

server.use(express.static(__dirname + "/public")) //archivos estaticos
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use('/api', productsRoutes)
server.use('/', viewsRoutes)

const httpServer = server.listen(PORT, () =>{
    try {
        console.log(`Escuchando el puerto ${PORT}`);
        console.log(`\t1). http://localhost:${PORT}/api/products`)
        console.log(`\t2). http://localhost:${PORT}/api/carts`);
    }
    catch (err) {
        console.log(err);
    }
})

//HANDLEBARS

server.engine('handlebars', handlebars.engine())
server.set('views', __dirname+ '/views')
server.set('view engine', 'handlebars')

//io
const socketServer = new Server(httpServer)
socketProducts(socketServer)






