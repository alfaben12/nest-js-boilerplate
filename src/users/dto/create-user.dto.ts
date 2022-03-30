import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsObject, ValidateNested } from "class-validator";

class CompanyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;
}

export class CreateUserDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  tokenAddress: string

  @IsNotEmpty()
  country: string

  @IsNotEmpty()
  phone: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string

  @IsNotEmpty()
  fingerprint: string

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => CompanyDto)
  company: CompanyDto;
}