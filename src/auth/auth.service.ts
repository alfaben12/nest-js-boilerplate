import { HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { AccountsService } from "src/accounts/accounts.service";
import { SigninDto } from "./dto/signin.dto";
import * as bcrypt from 'bcrypt';
import { ServiceResponse } from "types/service-response";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly accountsService: AccountsService,
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService
  ) { }

  async signin(signinDto: SigninDto): Promise<ServiceResponse> {
    const account = await this.accountsService.findBySignin(
      signinDto.email,
    );

    if (!account.status) {
      return account
    }

    const passwordCompare = bcrypt.compareSync(signinDto.password, account.data.password)
    if (!passwordCompare) {
      return {
        status: false,
        message: "Password not match",
        data: null,
        statusCode: HttpStatus.FORBIDDEN
      }
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
      statusCode: HttpStatus.OK
    }
  }

  async findLagging(): Promise<ServiceResponse> {
    const laggings = await this.prismaService.lagging.findMany({
      orderBy: {
        id: "asc"
      }
    })

    return {
      status: true,
      message: "Success get data",
      data: laggings,
      statusCode: HttpStatus.OK
    };
  }
}
