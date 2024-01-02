import { Router } from "express";
import ProductManager from "../controllers/ProductManager.js";
import { __dirname } from "../utils.js";

const prodM = new ProductManager(__dirname+'/models/products.json')
const viewsRoutes = Router()


viewsRoutes.get("/",async(req,res)=>{
    const listadeproductos = await prodM.getProductsView()
    res.render("home",{listadeproductos})
})

viewsRoutes.get("/realtimeproducts",(req,res)=>{
res.render("realTimeproducts")
})


export default viewsRoutes