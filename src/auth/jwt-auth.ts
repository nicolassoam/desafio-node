import * as jose from 'jose';

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

export const decode = async (token: string): Promise<Boolean> => {
    
    const decoded = verify(token);

    if(!decoded) return false 
    else return true;
}
