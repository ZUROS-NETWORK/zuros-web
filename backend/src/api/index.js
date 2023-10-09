import { Router } from "express";
import { products, product } from "./shop/products"
const router = Router();

const errorMsg = { error: "Error interno del servidor :c" }
router.get("/ping", async (req, res) => {
    res.json('pong!');
});

router.get("/products", async (req, res) => {
    try {
        const response = await products();
        res.json(response);
    } catch (error) {
        res.status(500).json(errorMsg);
    }
});
router.get("/product/:category", async (req, res) => {
    try {
        const category = req.params.category;
        const response = await product(category);
        res.json(response);
    } catch (error) {
        res.status(500).json(errorMsg);
    }
});


export { router };
