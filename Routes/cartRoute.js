import express from 'express';
import { addToCart, clearCart, decreaseProductQty, removeProductFromCart, userCart } from '../Controllers/cartController.js';
import { Authenticated } from '../middleWare/auth.js';
export const cartRouter= express.Router();

//// add to cart
cartRouter.post("/add",Authenticated,addToCart);

///get user cart
cartRouter.get("/user",Authenticated,userCart);

//remove from cart 
cartRouter.delete("/remove/:productId" ,Authenticated,removeProductFromCart)

///clear cart
cartRouter.delete("/clear",Authenticated,clearCart)


///decrease product qty
cartRouter.post("/--qty",Authenticated,decreaseProductQty)