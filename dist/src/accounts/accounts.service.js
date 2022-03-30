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
exports.AccountsService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const service_response_1 = require("../../types/service-response");
const prisma_service_1 = require("../prisma/prisma.service");
let AccountsService = class AccountsService {
    constructor(userService, prismaService) {
        this.userService = userService;
        this.prismaService = prismaService;
    }
    async findAccount(id) {
        const account = await this.userService.findOne(+id);
        return {
            status: true,
            message: `Hi, ${account.name}!`,
            data: account,
            statusCode: common_1.HttpStatus.OK
        };
    }
    async findBySignin(email) {
        const account = await this.userService.findByEmail(email);
        return {
            status: true,
            message: `Hi, ${account.name}!`,
            data: account,
            statusCode: common_1.HttpStatus.OK
        };
    }
};
AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        prisma_service_1.PrismaService])
], AccountsService);
exports.AccountsService = AccountsService;
//# sourceMappingURL=accounts.service.js.map