import { UsersService } from "src/users/users.service";
import { ServiceResponse } from "types/service-response";
import { PrismaService } from "src/prisma/prisma.service";
export declare class AccountsService {
    private readonly userService;
    private readonly prismaService;
    constructor(userService: UsersService, prismaService: PrismaService);
    findAccount(id: string): Promise<ServiceResponse>;
    findBySignin(email: string): Promise<ServiceResponse>;
}
