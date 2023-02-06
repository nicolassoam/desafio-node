import  *  as RestauranteService from "./restaurante-service";
import * as AuthService from "../auth/auth-service";
import { Request, Response } from "express";
import prisma from "../database/prisma-service";
import * as jwt from "../auth/jwt-auth"
import { Prisma, PrismaClient, Restaurantes } from "@prisma/client";


export class RestauranteController {

    async index(req: Request, res: Response): Promise<Response> {

        try {

            const restaurantes = await RestauranteService.index();

            return res.status(200).json(restaurantes);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
        
    }

    async show(req: Request, res: Response): Promise<Response> {
        try {

            const restaurante = await RestauranteService.show(Number(req.params.id));

            return res.status(200).json(restaurante);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
        
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {

            const exists = await RestauranteService.findIdByEmail(req.body.email);

            if(exists) return res.status(400).json({ error: "Email já cadastrado" });

            const restauranteBody : Prisma.RestaurantesCreateInput = req.body;
            const restaurante = await RestauranteService.create(restauranteBody);

            return res.status(201).json(restaurante);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {

            const restauranteBody : Prisma.RestaurantesUpdateInput = req.body;
            const restaurante = await RestauranteService.update(Number(req.params.id), restauranteBody);

            return res.status(200).json(restaurante);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {

            const restaurante = await RestauranteService.destroy(Number(req.params.id));
            return res.status(200).json(restaurante);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    async login(req: Request, res: Response): Promise<Response> {
        try {
            const login = await AuthService.login(req.body);

            if(!login) return res.status(401).json({ error: "Usuário ou senha inválidos" });

            req.headers.authorization = 'Bearer '+ login.token;

            console.log(req.headers.authorization);

            req.cookies["restaurante_email"] = login.email;


            return res.status(200).json({ login });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }


    
}