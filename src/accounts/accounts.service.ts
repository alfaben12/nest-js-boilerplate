import { HttpStatus, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { ServiceResponse } from "types/service-response";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AccountsService {
  constructor(
    private readonly userService: UsersService,
    private readonly prismaService: PrismaService) { }

  async findAccount(id: string): Promise<ServiceResponse> {
    const account = await this.userService.findOne(+id)

    return {
      status: true,
      message: `Hi, ${account.name}!`,
      data: account,
      statusCode: HttpStatus.OK
    };
  }

  async findBySignin(email: string): Promise<ServiceResponse> {
    const account = await this.userService.findByEmail(email)

    return {
      status: true,
      message: `Hi, ${account.name}!`,
      data: account,
      statusCode: HttpStatus.OK
    };
  }
}
