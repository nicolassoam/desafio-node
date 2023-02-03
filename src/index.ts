import express from 'express';
import cors from "cors";
import produtos from '../src/produto/produto-routes';
import restaurantes from '../src/restaurante/restaurante-routes';
import prisma from '../src/database/prisma-service';


const routes = (app: express.Application) => {
    app.use(cors( { origin: '*' }));
    app.use(express.json());
    app.use(produtos, restaurantes);

    app.route('/').get((req, res) => {
        res.send('Hello World!');
    });

}

export default routes;