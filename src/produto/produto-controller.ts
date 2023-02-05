import * as ProdutoService from "./produto-service";
import * as RestauranteService from "../restaurante/restaurante-service";
import * as jwt from "../auth/jwt-auth";
import { Request, Response } from "express";

export class ProdutoController {

    async index(req: Request, res: Response): Promise<Response> {
        try {
            const restauranteId = req.cookies["payload"];
        
            const produtos = await ProdutoService.indexByRestaurante(Number(restauranteId));

            return res.status(200).json(produtos);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async show(req: Request, res: Response): Promise<Response> {
        try {
            const restauranteId = req.cookies["payload"];
            const produto = await ProdutoService.showByRestaurante(Number(restauranteId),Number(req.params.id));

            return res.status(200).json(produto);

        } catch (error) {
            const msg = "Produto não encontrado";
            return res.status(500).json({ error: msg });
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {

            const restauranteId = req.cookies["payload"];

            if (!restauranteId) return res.status(404).json({ error: "Restaurante não encontrado" });
            req.body.id_restaurante = restauranteId;

            const produto = await ProdutoService.create(req.body);

            return res.status(201).json(produto);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {

            const restauranteId = req.cookies["payload"];

            if (!restauranteId) return res.status(404).json({ error: "Restaurante não encontrado" });
            req.body.id_restaurante = restauranteId;

            const produto = await ProdutoService.update(Number(req.params.id), req.body);

            return res.status(200).json(produto);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {

            const restauranteId = req.cookies["payload"];

            if (!restauranteId) return res.status(404).json({ error: "Restaurante não encontrado" });
            

            const produto = await ProdutoService.destroy(Number(req.params.id), Number(restauranteId));
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
}