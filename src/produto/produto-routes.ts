import * as express from 'express';
import { ProdutoController } from './produto-controller';
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
    .post('/produtos/create', controller.create);


//updates
router
    .put('/produtos/update/:id', controller.update);

// delete
router
    .delete('/produtos/delete/:id', controller.delete);

export default router;

