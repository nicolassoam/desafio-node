import { Prisma, PrismaClient, Restaurantes } from "@prisma/client";
import prisma from "../database/prisma-service";
import * as bcrypt from "bcrypt";

   export const index = async (): Promise<Restaurantes[]> => {
        return prisma.restaurantes.findMany({ include: { produtos: true, pedidos:true } });
    } 

    export const show = async (id: number): Promise<Restaurantes> => {
        return prisma.restaurantes.findUnique({
            where: {
                id: id
            }
        });
    }

    export const findIdByEmail = async (email: string): Promise<Object|null> => {
        return prisma.restaurantes.findUnique({
            where: {
                email: email
            },
            select: {
                id: true, 
                senha: false,
                nome: false,
                email: false,
                telefone: false,
                endereco: false,
                cidade: false,
                categoria: false
            }
        });
    }

    export const create = async (data: Prisma.RestaurantesCreateInput): Promise<Restaurantes> => {
        const salt = Number(process.env.SALT)
        const senha = await bcrypt.hash(data.senha, salt);
        data.senha = senha;
        const restaurante = await prisma.restaurantes.create({
            data: data
        });
        data.senha = '';
        return restaurante;
    }

    export const update = async (id: number, data: Prisma.RestaurantesUpdateInput): Promise<Restaurantes> => {
        const salt = Number(process.env.SALT)
        const senha = await bcrypt.hash(data.senha, salt);
        data.senha = senha;

        const restaurante = await prisma.restaurantes.update({
            where: {
                id: id
            },
            data: data
        });
        data.senha = '';
        return restaurante;
    }

    export const destroy = async (id: number): Promise<Restaurantes> => {
        return prisma.restaurantes.delete({
            where: {
                id: id
            }
        });
    }
    
