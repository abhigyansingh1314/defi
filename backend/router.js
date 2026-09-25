import express from 'express';
const router = express.Router();
import {login, logout, redirect} from './auth.js';
import userController from './Controller/userController.js';

router.get('/login', login);
router.get('/redirect', redirect);
router.get('/logout', logout);
router.post('/create-user',userController.createUser);
router.get('/get-user',userController.getUsers);

export default router;