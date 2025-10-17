import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateWorkerDto } from './dtos/create-worker.dto';
import { WorkersService } from './services/workers/workers.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('workers')
export class WorkersController {
    constructor(private workerService: WorkersService) {}
    @Post('/create')
    createWorker(@Body () body: CreateWorkerDto) {
        return this.workerService.create(body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getProfile(@Req() req) {
        console.log(req);
        
        return req.user; // { userId, role }
    }
}
