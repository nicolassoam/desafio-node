import * as express from 'express';
import { ProdutoController } from './produto-controller';
import { auth } from '../auth/jwt-auth';
import prisma from '../database/prisma-service';
import cors from 'cors';


const router: express.Router = express.Router();
const controller: ProdutoController = new ProdutoController();

// gets
router
    .get('/produtos', controller.index)
    .get('/produtos/:id', controller.show);


// posts
router
    .post('/produtos/create', auth, controller.create);


//updates
router
    .put('/produtos/update/:id', auth, controller.update);

// delete
router
    .delete('/produtos/delete/:id', auth, controller.delete);

export default router;

