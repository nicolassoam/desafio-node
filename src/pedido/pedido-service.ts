import { Pedidos } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { Request } from "express";
import prisma from "../database/prisma-service";

export const index = async (): Promise<Pedidos[]> => {
    return prisma.pedidos.findMany({ include: { produtos: true } });
} 

export const indexByRestaurante = async (id: number): Promise<Pedidos[]> => {
    return prisma.pedidos.findMany({
        where: {
            id_restaurante: id
        },
        include: { produtos: true }
    });
}

export const show = async (id: number): Promise<Pedidos> => {
    return prisma.pedidos.findUnique({
        where: {
            id: id
        },
        include: { produtos: true }
    });
}

export const showByRestaurante = async (id: number, id_pedido: number): Promise<Pedidos> => {
    return prisma.pedidos.findFirst({
        where: {
            id: id_pedido,
            id_restaurante: id
        },
        include: { produtos: true}
    });
}


export const create = async (data: Prisma.PedidosCreateInput, produtos_id: Array<Number>): Promise<Pedidos> => {

    data.produtos = { connect: [...produtos_id.map((id: number) => { return {id: id} })]};

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

export const destroy = async (id: number, restaurante_id): Promise<Object> => {
    return prisma.pedidos.deleteMany({
        where: {
            id: id,
            id_restaurante: restaurante_id
        }
    });
}
