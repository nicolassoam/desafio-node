import { Produtos } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
import prisma from "../database/prisma-service";

export const index = async (): Promise<Produtos[]> => {
    return prisma.produtos.findMany();
} 

export const show = async (id: number): Promise<Produtos> => {
    return prisma.produtos.findUnique({
        where: {
            id: id
        }
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

export const destroy = async (id: number): Promise<Produtos> => {
    return prisma.produtos.delete({
        where: {
            id: id
        }
    });
}
