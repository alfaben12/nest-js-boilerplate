declare class CompanyDto {
    name: string;
    address: string;
}
export declare class CreateUserDto {
    name: string;
    tokenAddress: string;
    country: string;
    phone: string;
    email: string;
    password: string;
    fingerprint: string;
    company: CompanyDto;
}
export {};
