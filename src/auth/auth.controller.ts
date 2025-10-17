import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './services/auth/auth.service';
import { CreateWorkerDto } from '../workers/dtos/create-worker.dto';
import { Role } from '../shared/common.enum';
import { Serialize } from '../shared/interceptors/serialize-response.interceptor';
import { WorkerDto } from 'src/workers/dtos/workers.dto';
import { SignInDto } from '../shared/dtos/sign-in.dto';
@Serialize(WorkerDto)
@Controller('auth')
export class AuthController {
    
    constructor(private authService: AuthService) {}

    @Post('/worker/signup/:role')
    signup(@Body() body: CreateWorkerDto, @Param('role') params: Role) {
        if(params === Role.Worker){
            return this.authService.createWorker(body);
        }  
    }

    @Post('/worker/signin')
    signin(@Body() body: SignInDto) {
        return this.authService.signinWorker(body);
    }
}
