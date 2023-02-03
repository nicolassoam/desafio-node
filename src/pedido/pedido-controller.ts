import * as ProdutoService from "./pedido-service";
import { Request, Response } from "express";

export class PedidoController {

    async index(req: Request, res: Response) {
        const produtos = ProdutoService.index();
        console.log(produtos);
        res.status(200).json(produtos);
    }

    async show(req: Request, res: Response) {
        const produto = await ProdutoService.show(Number(req.params.id));
        res.status(200).json(produto);
    }

    async create(req: Request, res: Response) {
        const produto = await ProdutoService.create(req.body);
        res.status(201).json(produto);
    }

    async update(req: Request, res: Response) {
        const produto = await ProdutoService.update(Number(req.params.id), req.body);
        res.status(200).json(produto);
    }

    async delete(req: Request, res: Response) {
        const produto = await ProdutoService.destroy(Number(req.params.id));
        res.status(200).json(produto);
    }
    
}