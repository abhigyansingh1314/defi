import  Express  from "express";
import  Router  from "express";
import userController from "../Controller/userController.js";
const app=Express();
const userRouter=Router();
userRouter.get('/user',userController.getUsers);
userRouter.get('/user/:id',userController.getUserById);



export default userRouter;