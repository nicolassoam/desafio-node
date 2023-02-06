import * as express from 'express';
import { RestauranteController } from './restaurante-controller';
import { auth } from '../auth/jwt-auth';
import prisma from '../database/prisma-service';
import cors from 'cors';

const router: express.Router = express.Router();

const controller: RestauranteController = new RestauranteController();

router
    .get('/restaurantes', auth, 
    // #swagger.tags = ['Restaurante']
    // #swagger.description = 'Endpoint para manipulação de restaurantes'
    // #swagger.security = [{
    //     "bearerAuth": []
    // }]

    // #swagger.path = '/restaurantes'
    // #swagger.method = 'get'
    // #swagger.description = 'Endpoint para obter todos os restaurantes'
    
    // #swagger.responses[200] = {
    //     description: 'Restaurante Encontrado',
    //     schema: { $ref: "#/definitions/Restaurante" }
    // }
    controller.index)

    .get('/restaurantes/:id',auth,
    
    // #swagger.tags = ['Restaurante']
    // #swagger.description = 'Endpoint para manipulação de restaurantes'
    // #swagger.security = [{
    //     "bearerAuth": []
    // }]

    /* #swagger.parameters['id'] = { 
        description: 'ID do restaurante',
        type: 'integer' 
    } */

    // #swagger.path = '/restaurantes/{id}'
    // #swagger.method = 'get'
    // #swagger.description = 'Endpoint para obter um único restaurante'

    controller.show);
            
router
    .post('/restaurantes/create', controller.create)
    .post('/restaurantes/login', controller.login);

router
    .put('/restaurantes/:id', auth, controller.update);

router
    .delete('/restaurantes/:id', auth, controller.delete);

export default router;

/* #swagger.parameters['id'] = { 
        description: 'ID do restaurante',
        type: 'integer' 
    }
    #swagger.parameters['nome'] = { description: 'Nome do restaurante' }
    #swagger.parameters['email'] = { description: 'Email do restaurante' }
    #swagger.parameters['senha'] = { description: 'Senha do restaurante' }
    #swagger.parameters['telefone'] = { description: 'Telefone do restaurante' }
    #swagger.parameters['endereco'] = { description: 'Endereço do restaurante' }
    #swagger.parameters['cidade'] = { description: 'Cidade do restaurante' } */

