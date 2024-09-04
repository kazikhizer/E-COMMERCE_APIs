import express from 'express';
import { addAdress, getAdress } from '../Controllers/addressController.js';
import { Authenticated } from '../middleWare/auth.js';
const addressRouter= express.Router();
//add address
addressRouter.post("/add",Authenticated, addAdress)

// get address 
addressRouter.get("/get",Authenticated, getAdress); 


export default addressRouter;