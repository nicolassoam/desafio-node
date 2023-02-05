import { PrismaClient, Restaurantes } from '@prisma/client';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { jwt } from './jwt-auth';
import prisma from '../database/prisma-service';

type LoginData = {
    email:string;
    senha:string;
}
type LoggedUser = {
    email: string;
    token: string;
}
export const login = async(data: LoginData): Promise<LoggedUser> => {
    const restaurante = await prisma.restaurantes.findUnique({
        where: {
            email: data.email
        }
    });
    const validate = await bcrypt.compare(data.senha, restaurante.senha);
    if(validate){
        const token = await jwt(restaurante.id);
        const email = restaurante.email;
        return {token, email};
    }else{
        throw new Error('Senha incorreta');
    }
}