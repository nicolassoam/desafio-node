import express from 'express';
import cors from "cors";
import produtos from '../src/produto/produto-routes';
import restaurantes from '../src/restaurante/restaurante-routes';
import pedidos from '../src/pedido/pedido-routes';
import cookieParser from 'cookie-parser';

const routes = (app: express.Application) => {
    app.use(cors( { origin: '*' }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(produtos, restaurantes, pedidos);

    app.route('/').get((req, res) => {
        res.send('Hello World!');
    });

}

export default routes;