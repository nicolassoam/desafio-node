import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$connect();
prisma.$on('beforeExit', async () => {
    await prisma.$disconnect();
});

export default prisma;