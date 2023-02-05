import * as express from 'express';
import { PedidoController } from './pedido-controller';
import { auth } from '../auth/jwt-auth';
import prisma from '../database/prisma-service';
import cors from 'cors';


const router: express.Router = express.Router();
const controller: PedidoController = new PedidoController();

// gets
router
    .get('/pedidos',auth, controller.index)
    .get('/pedidos/:id',auth, controller.show);


// posts
router
    .post('/pedidos/create',auth, controller.create);


//updates
router
    .put('/pedidos/update/:id',auth, controller.update);

// delete
router
    .delete('/pedidos/delete/:id',auth, controller.delete);

export default router;

