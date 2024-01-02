import { Router } from "express"
import ProductManager from "../controllers/ProductManager.js"
import { __dirname } from "../utils.js"

const manager = new ProductManager(__dirname+'./modules/products.json')

const productsRoutes = Router()


productsRoutes.get("/products",async(req,res)=>{
    const products= await manager.getProducts(req.query)
    res.json({products})
})

productsRoutes.get("/products/:pid", async (req, res) => {
    const productfind = await manager.getProductbyId(req.params);
    res.json({ status: "success", productfind });
});

productsRoutes.post("/products", async (req, res) => {
    const newproduct = await manager.addProduct(req.body);
    res.json({ status: "success", newproduct });
});

productsRoutes.put("/products/:pid", async (req, res) => {
    const updatedproduct = await manager.updateProduct(req.params,req.body);
    res.json({ status: "success", updatedproduct });
});

productsRoutes.delete("/products/:pid", async (req, res) => {
    const id=parseInt(req.params.pid)
    const deleteproduct = await manager.deleteProduct(id);
    res.json({ status: "success",deleteproduct });
});


export default productsRoutes