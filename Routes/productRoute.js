import express from 'express'
import { addProduct, deleteProductById, getProductById, getProducts, updateProductById } from '../Controllers/productController.js';

export const productRouter= express.Router();

////add product route
productRouter.post("/add",addProduct)

///get products route
productRouter.get("/all",getProducts)

/// get product by ID
productRouter.get("/:id", getProductById)

///product updated by id
productRouter.put("/:id",updateProductById)

///product delete by id
productRouter.delete("/:id",deleteProductById)