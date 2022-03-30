import { HttpStatus } from "@nestjs/common";
export declare class ServiceResponse {
    status: boolean;
    message: string;
    data: any;
    statusCode: HttpStatus;
}
