import * as PedidoService from "./pedido-service";
import * as RestauranteService from "../restaurante/restaurante-service";
import { Request, Response } from "express";
import * as jwt from "../auth/jwt-auth";

export class PedidoController {

    async index(req: Request, res: Response): Promise<Response> {
        try {

            if(!req.headers.authorization.split(' ')[1]) return res.status(403).json({ error: "Sem autorização!" });

            const validate = jwt.verify(req.headers.authorization.split(' ')[1]);

            if(await validate == null) return res.status(403).json({ error: "Sem autorização!" });

            const pedidos = await PedidoService.index();
            return res.status(200).json(pedidos);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async show(req: Request, res: Response): Promise<Response> {
        try {

            if(!req.headers.authorization.split(' ')[1]) return res.status(403).json({ error: "Sem autorização!" });

            const validate = jwt.verify(req.headers.authorization.split(' ')[1]);

            if(await validate == null) return res.status(403).json({ error: "Sem autorização!" });

            const pedido = await PedidoService.show(Number(req.params.id));
            return res.status(200).json(pedido);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {

            if(!req.headers.authorization.split(' ')[1]) return res.status(403).json({ error: "Sem autorização!" });

            const validate = jwt.verify(req.headers.authorization.split(' ')[1]);

            if(await validate == null) return res.status(403).json({ error: "Sem autorização!" });

            const restaurante = await RestauranteService.show(Number(req.body.id_restaurante));
            if(!restaurante) return res.status(404).json({ error: "Restaurante não encontrado" });
            
            if(!req.body.produtos_id) return res.status(404).json({ error: "Pedido sem produtos" });
            
            const produtos_id = req.body.produtos_id;
            delete req.body.produtos_id;

            const pedido = await PedidoService.create(req.body, produtos_id);

            return res.status(201).json(pedido);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {

            if(!req.headers.authorization.split(' ')[1]) return res.status(403).json({ error: "Sem autorização!" });

            const validate = jwt.verify(req.headers.authorization.split(' ')[1]);

            if(await validate == null) return res.status(403).json({ error: "Sem autorização!" });

            req.body.id_restaurante = undefined;
            const pedido = await PedidoService.update(Number(req.params.id), req.body);

            return res.status(200).json(pedido);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {

            if(!req.headers.authorization.split(' ')[1]) return res.status(403).json({ error: "Sem autorização!" });

            const validate = jwt.verify(req.headers.authorization.split(' ')[1]);

            if(await validate == null) return res.status(403).json({ error: "Sem autorização!" });

            const pedido = await PedidoService.destroy(Number(req.params.id));
            return res.status(200).json(pedido);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
}