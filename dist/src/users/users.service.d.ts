import { User } from '@prisma/client';
import { PrismaService } from "src/prisma/prisma.service";
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<User>;
    findByEmail(email: string): Promise<User>;
}
