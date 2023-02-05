import { Produtos } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
import prisma from "../database/prisma-service";

export const index = async (): Promise<Produtos[]> => {
    return prisma.produtos.findMany({ include: { pedidos: true } });
} 

export const indexByRestaurante = async (id: number): Promise<Produtos[]> => {
    return prisma.produtos.findMany({
        where: {
            id_restaurante: id
        },
        include: { pedidos: true }
    });
}

export const showByRestaurante = async (id: number, id_produto: number): Promise<Produtos> => {
    return prisma.produtos.findFirst({
        where: {
            id: id_produto,
            id_restaurante: id
        },
        include: { pedidos: true}
    });
}

export const show = async (id: number): Promise<Produtos> => {
    return prisma.produtos.findUnique({
        where: {
            id: id
        },
        include: { pedidos: true}
    });
}

export const create = async (data: Prisma.ProdutosCreateInput): Promise<Produtos> => {
    return prisma.produtos.create({
        data: data
    });
}

export const update = async (id: number, data: Prisma.ProdutosUpdateInput): Promise<Produtos> => {

    return prisma.produtos.update({
        where: {
            id: id
        },
        data: data
    });
}

export const destroy = async (id: number,restaurante_id:number): Promise<Object> => {
    return prisma.produtos.deleteMany({
        where: {
            id: id,
            id_restaurante: restaurante_id
        }
    });
}
