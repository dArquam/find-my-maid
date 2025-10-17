import { Body, Controller, Post } from '@nestjs/common';
import { CreateWorkerDto } from './dtos/create-worker.dto';
import { WorkersService } from './services/workers/workers.service';

@Controller('workers')
export class WorkersController {
    constructor(private workerService: WorkersService) {}
    @Post('/create')
    createWorker(@Body () body: CreateWorkerDto) {
        return this.workerService.create(body);
    }
}
