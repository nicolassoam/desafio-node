import  *  as RestauranteService from "./restaurante-service";
import { Request, Response } from "express";
import prisma from "../database/prisma-service";
import { Prisma, PrismaClient, Restaurantes } from "@prisma/client";


export class RestauranteController {

    async index(req: Request, res: Response): Promise<Response> {
        const restaurantes = await RestauranteService.index();
        return res.status(200).json(restaurantes);
    }

    async show(req: Request, res: Response) {
        const restaurante = await RestauranteService.show(Number(req.params.id));
        res.status(200).json(restaurante);
    }

    async create(req: Request, res: Response) {
        const restauranteBody : Prisma.RestaurantesCreateInput = req.body;
        
        const restaurante = RestauranteService.create(restauranteBody);
        res.status(201).json(restaurante);
    }

    async update(req: Request, res: Response) {
        const restaurante = await RestauranteService.update(Number(req.params.id), req.body);
        res.status(200).json(restaurante);
    }

    async delete(req: Request, res: Response) {
        const restaurante = await RestauranteService.destroy(Number(req.params.id));
        res.status(200).json(restaurante);
    }
    
}