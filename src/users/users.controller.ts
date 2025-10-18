import { Controller, Post, Param, Query, Body, UseGuards } from '@nestjs/common';
import { FindMaidsDto } from './dtos/find-maids.dto';
import { UsersService } from './services/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { Serialize } from '../shared/interceptors/serialize-response.interceptor';
import { WorkerDto } from '../workers/dtos/workers.dto';

 @UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @Post('/find-maids')
    @Serialize(WorkerDto)
    findAll(@Body() body: FindMaidsDto) {
        console.log('body', body);
        
       return this.usersService.find(body);
    }
}
