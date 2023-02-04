import { Pedidos } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
import prisma from "../database/prisma-service";

export const index = async (): Promise<Pedidos[]> => {
    return prisma.pedidos.findMany();
} 

export const show = async (id: number): Promise<Pedidos> => {
    return prisma.pedidos.findUnique({
        where: {
            id: id
        }
    });
}

export const create = async (data: Prisma.PedidosCreateInput): Promise<Pedidos> => {
    return prisma.pedidos.create({
        data: data
    });
}

export const update = async (id: number, data: Prisma.PedidosUpdateInput): Promise<Pedidos> => {
    return prisma.pedidos.update({
        where: {
            id: id
        },
        data: data
    });
}

export const destroy = async (id: number): Promise<Pedidos> => {
    return prisma.pedidos.delete({
        where: {
            id: id
        }
    });
}
