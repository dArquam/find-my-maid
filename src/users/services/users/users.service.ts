import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindMaidsDto } from 'src/users/dtos/find-maids.dto';
import { Worker } from 'src/workers/entities/worker.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Worker) private workerRepository: MongoRepository<Worker>){

    }
    async find(body: FindMaidsDto){
       const workers = await this.workerRepository.find({
            where: {
                skills: { $in: body.works }
            }
       });
       console.log('workers', workers);
       
       return workers;
    }
}
