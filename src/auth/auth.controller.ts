import {
  Controller,
  Get,
  HttpException,
  Post
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Body } from "@nestjs/common";
import { SigninDto } from "./dto/signin.dto";

@Controller({ path: "auth", version: "1" })
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post("signin")
  async signin(@Body() signinDto: SigninDto) {
    const result = await this.authService.signin(signinDto);

    throw new HttpException(result, result.statusCode);
  }

  @Get("/lagging")
  async findLagging() {
    const result = await this.authService.findLagging()
    throw new HttpException(result, result.statusCode);
  }
}
