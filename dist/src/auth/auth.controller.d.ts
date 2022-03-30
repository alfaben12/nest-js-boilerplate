import { AuthService } from "./auth.service";
import { SigninDto } from "./dto/signin.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signin(signinDto: SigninDto): Promise<void>;
    findLagging(): Promise<void>;
}
