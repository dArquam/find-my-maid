import { Gender } from 'src/shared/common.enum';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectIdColumn } from 'typeorm';

@Entity('workers')
export class Worker {
    @ObjectIdColumn()
    _id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    gender: Gender;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    skills: string[];

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

