import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWorkerDto } from 'src/workers/dtos/create-worker.dto';
import { Worker } from 'src/workers/entities/worker.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class WorkersService {
    constructor(@InjectRepository(Worker) private workerRepository: MongoRepository<Worker>){
    }

    async create(body: CreateWorkerDto){
        const worker = await this.workerRepository.create(body);
        console.log('worker', worker);
        
        return this.workerRepository.save(worker);
    }
}
