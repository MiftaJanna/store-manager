import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterDto } from '../DTOs/register.dto';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    add(addDto: RegisterDto): Promise<string>;
    getIn(email: string, password: string): Promise<string>;
}
