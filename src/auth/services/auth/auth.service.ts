import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWorkerDto } from 'src/workers/dtos/create-worker.dto';
import { Worker } from '../../../workers/entities/worker.entity';
import { MongoRepository } from 'typeorm';
import { randomBytes, scrypt as _scrypt} from 'crypto';
import { promisify } from 'util';

const  scrypt = promisify(_scrypt); //convert callback based function to promise based function

@Injectable()
export class AuthService {
    constructor(@InjectRepository(Worker) private userRepository: MongoRepository<Worker>) {
    }

    async createWorker(body: CreateWorkerDto){
        const existingWorker = await this.userRepository.findOne({ where: { email: body.email } });
        if (existingWorker) {
            throw new ConflictException('Email already exists');
        }

         //hash the password
        const salt = randomBytes(16).toString('hex'); // 16 bytes = 128 bits //32 chars in hex
        const hash = (await scrypt(body.password, salt, 32)) as Buffer; //returns buffer //32 bytes = 64 chars in hex
        const result = salt + '.' + hash.toString('hex'); //salt and hash are concatenated with a dot in between
        body.password = result;
        const worker = this.userRepository.create(body);
        return this.userRepository.save(worker);
    }

    async signinWorker(body: { email: string; password: string }){
        const worker =  await this.userRepository.findOne({ where: { email: body.email } });
        if(!worker){
            throw new ConflictException('Invalid credentials');
        }

        const [salt, storedHash] = worker.password.split('.'); //split the stored password into salt and hash
        const hash = (await scrypt(body.password, salt, 32)) as Buffer; //hash the provided password with the stored salt
        if(storedHash !== hash.toString('hex')){
            throw new ConflictException('Invalid credentials');
        }
        return worker;


    }

}
