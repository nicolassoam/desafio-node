import * as express from 'express';
import { PedidoController } from './pedido-controller';
import prisma from '../database/prisma-service';
import cors from 'cors';


const router: express.Router = express.Router();
const controller: PedidoController = new PedidoController();

// gets
router
    .get('/pedidos', controller.index)
    .get('/pedidos/:id', controller.show);


// posts
router
    .post('/pedidos/create', controller.create);


//updates
router
    .put('/pedidos/update/:id', controller.update);

// delete
router
    .delete('/pedidos/delete/:id', controller.delete);

export default router;

