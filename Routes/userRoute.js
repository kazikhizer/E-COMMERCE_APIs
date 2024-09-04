import express from 'express';
import { login, profile, register, users } from '../Controllers/userController.js';
import { Authenticated } from '../middleWare/auth.js';

const userRouter= express.Router();

///register user Route
userRouter.post("/register",register)

///login user Route
userRouter.post("/login", login)

//get all users Route 
userRouter.get("/all",users)

////profile user routes
userRouter.get("/profile",Authenticated,profile)

export default userRouter;