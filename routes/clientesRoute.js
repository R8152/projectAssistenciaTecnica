import express from "express"
import { Router } from "express"
import {
    getClientes,
    getClienteById,
    createCliente,
    updateCliente
} from "../controllers/clientesController"
// import * as clienteController from "../controllers/clientesController.js"
const router = Router()

router.get("/", getClientes)
router.get("/:id", getClienteById)
router.post("/", createCliente)
router.put("/:id", updateCliente)

export default router