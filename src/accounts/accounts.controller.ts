import { Controller, Get, HttpException, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AccountsService } from './accounts.service';

@Controller({ path: 'accounts', version: '1' })
@UseGuards(JwtAuthGuard)
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) { }

  @Get()
  async findAccount(@Req() req) {
    const result = await this.accountsService.findAccount(req.user.userId);
    throw new HttpException(result, result.statusCode);
  }
}
