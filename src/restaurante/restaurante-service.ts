import { Prisma, PrismaClient, Restaurantes } from "@prisma/client";
import prisma from "../database/prisma-service";


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

    export const create = async (data: Prisma.RestaurantesCreateInput): Promise<Restaurantes> => {
        return prisma.restaurantes.create({
            data: data
        });
    }

    export const update = async (id: number, data: Restaurantes): Promise<Restaurantes> => {
        return prisma.restaurantes.update({
            where: {
                id: id
            },
            data: data
        });
    }

    export const destroy = async (id: number): Promise<Restaurantes> => {
        return prisma.restaurantes.delete({
            where: {
                id: id
            }
        });
    }
    
