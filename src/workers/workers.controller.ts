import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateWorkerDto } from './dtos/create-worker.dto';
import { WorkersService } from './services/workers/workers.service';
import { AuthGuard } from '@nestjs/passport';
import { CurrentProfile } from '../shared/decorators/current-profile.decorator';

@UseGuards(AuthGuard('jwt'))
@Controller('workers')
export class WorkersController {
    constructor(private workerService: WorkersService) {}
    @Post('/create')
    createWorker(@Body () body: CreateWorkerDto) {
        return this.workerService.create(body);
    }

   
    @Get()
    getProfile(@CurrentProfile() worker: any) {
        console.log('worker', worker);
        return worker 
    }
}
