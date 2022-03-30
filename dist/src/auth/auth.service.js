"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const accounts_service_1 = require("../accounts/accounts.service");
const bcrypt = require("bcrypt");
const service_response_1 = require("../../types/service-response");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    constructor(accountsService, jwtService, prismaService) {
        this.accountsService = accountsService;
        this.jwtService = jwtService;
        this.prismaService = prismaService;
    }
    async signin(signinDto) {
        const account = await this.accountsService.findBySignin(signinDto.email);
        if (!account.status) {
            return account;
        }
        const passwordCompare = bcrypt.compareSync(signinDto.password, account.data.password);
        if (!passwordCompare) {
            return {
                status: false,
                message: "Password not match",
                data: null,
                statusCode: common_1.HttpStatus.FORBIDDEN
            };
        }
        const payload = { sub: account.data.id, name: account.data.name };
        const jwtToken = this.jwtService.sign(payload);
        return {
            status: true,
            message: `Hi, ${account.data.name}!`,
            data: {
                isAuth: true,
                token: jwtToken,
                user: account.data
            },
            statusCode: common_1.HttpStatus.OK
        };
    }
    async findLagging() {
        const laggings = await this.prismaService.lagging.findMany({
            orderBy: {
                id: "asc"
            }
        });
        return {
            status: true,
            message: "Success get data",
            data: laggings,
            statusCode: common_1.HttpStatus.OK
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [accounts_service_1.AccountsService,
        jwt_1.JwtService,
        prisma_service_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map