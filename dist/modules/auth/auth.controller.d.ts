import { AuthService } from './auth.service';
import { RegisterDto } from '../DTOs/register.dto';
import { LoginDto } from '../DTOs/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    add(addDto: RegisterDto): Promise<string>;
    getIn(getInDto: LoginDto): Promise<string>;
}
