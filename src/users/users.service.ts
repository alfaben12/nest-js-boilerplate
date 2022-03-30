import { Injectable } from "@nestjs/common";
import {
  User,
} from '@prisma/client';
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }
  findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: {
        id
      },
    })
  }

  async findByEmail(email: string): Promise<User> {
    const data = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    })
    return data;
  }
}
