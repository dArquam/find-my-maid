import { Controller, Post, Param, Query, Body } from '@nestjs/common';
import { FindMaidsDto } from './dtos/find-maids.dto';
import { UsersService } from './services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @Post('/find-maids')
    findAll(@Body() body: FindMaidsDto) {
        console.log('body', body);
        
       return this.usersService.find(body);
    }
}
