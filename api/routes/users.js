import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js";

//indicação de rota
const router = express.Router();

//define metodo get fazer cahamda na pasta controllers
router.get("/", getUsers);

//define metodo post fazer cahamda na pasta controllers
router.post("/", addUser);

//define metodo put fazer cahamda na pasta controllers
router.put("/:id", updateUser);

//define metodo delete fazer cahamda na pasta controllers
router.delete("/:id", deleteUser);

export default router;
