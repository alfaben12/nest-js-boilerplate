import { JwtService } from "@nestjs/jwt";
import { AccountsService } from "src/accounts/accounts.service";
import { SigninDto } from "./dto/signin.dto";
import { ServiceResponse } from "types/service-response";
import { PrismaService } from "src/prisma/prisma.service";
export declare class AuthService {
    private readonly accountsService;
    private readonly jwtService;
    private readonly prismaService;
    constructor(accountsService: AccountsService, jwtService: JwtService, prismaService: PrismaService);
    signin(signinDto: SigninDto): Promise<ServiceResponse>;
    findLagging(): Promise<ServiceResponse>;
}
