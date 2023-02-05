import { PrismaClient, Restaurantes } from '@prisma/client';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { jwt } from './jwt-auth';
import prisma from '../database/prisma-service';

type LoginData = {
    email:string;
    senha:string;
}

export const signIn = async(data: LoginData): Promise<string> => {
    const restaurante = await prisma.restaurantes.findUnique({
        where: {
            email: data.email
        }
    });
    const validate = await bcrypt.compare(data.senha, restaurante.senha);
    if(validate){
        return jwt(restaurante.id);
    }else{
        throw new Error('Senha incorreta');
    }
}