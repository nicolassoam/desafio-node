import * as express from 'express';
import { RestauranteController } from './restaurante-controller';
import { auth } from '../auth/jwt-auth';
import prisma from '../database/prisma-service';
import cors from 'cors';

const router: express.Router = express.Router();

const controller: RestauranteController = new RestauranteController();

router
    .get('/restaurantes', auth, controller.index)
    .get('/restaurantes/:id',auth,controller.show);

router
    .post('/restaurantes/create', controller.create)
    .post('/restaurantes/login', controller.login);

router
    .put('/restaurantes/:id', auth, controller.update);

router
    .delete('/restaurantes/:id', auth, controller.delete);

export default router;

