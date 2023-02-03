import * as express from 'express';
import { RestauranteController } from './restaurante-controller';
import prisma from '../database/prisma-service';
import cors from 'cors';

const router: express.Router = express.Router();

const controller: RestauranteController = new RestauranteController();

router
    .get('/restaurantes', controller.index)
    .get('/restaurantes/:id',controller.show);

router
    .post('/restaurantes/create', controller.create);

router
    .put('/restaurantes/:id', controller.update);

router
    .delete('/restaurantes/:id', controller.delete);

export default router;

