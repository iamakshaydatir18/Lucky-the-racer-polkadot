import express from "express";
import { createUserController, findUserController } from "../controller/user-controller.js";


const routes = express.Router();

//create user
routes.route('/').post(createUserController);

//find by id
routes.route('/:id').get(findUserController);

export default routes;
