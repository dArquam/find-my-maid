import { Expose } from 'class-transformer';
import { Gender } from 'src/shared/common.enum';
export class WorkerDto {
    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @Expose()
    age: number;

    @Expose()
    gender: Gender;

    @Expose()
    email: string;


    @Expose()
    phone: string;

    @Expose()
    address: string;

    @Expose()
    skills: string[];
}