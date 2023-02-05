import * as jose from 'jose';
import { Response, NextFunction,Request } from 'express';
const privateKey = new TextEncoder().encode(process.env.SECRET);

export const jwt = async (id: number): Promise<string> => {
    const token = await new jose.SignJWT({ id: id })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('60h')
        .sign(privateKey);
    return token;
}

export const verify = async (token: string): Promise<jose.JWTPayload['payload']> => {
    try {
        const {payload, protectedHeader} = await jose.jwtVerify(token, privateKey);
        return payload;
    } catch (error) {
        return null;
    }
}

export const auth = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const validate = await verify(token);
        if(validate == null) return res.status(403).json({ error: "Sem autorização!" });
        next();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
