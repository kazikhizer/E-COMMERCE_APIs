import express from 'express';
import { Authenticated } from '../middleWare/auth.js';
import {allOrder, checkOut,userOrder,verify} from '../Controllers/paymentController.js'
 export const paymentRouter= express.Router();

 /// checkout 
 paymentRouter.post("/checkout",checkOut);

 ///verify payment and save to db
 paymentRouter.post("/verify-payment",verify)

////user order 
paymentRouter.get("/userorder",Authenticated,userOrder)

////all order 
paymentRouter.get("/orders",allOrder)