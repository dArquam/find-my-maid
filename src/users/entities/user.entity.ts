import { Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectIdColumn, Index } from 'typeorm';

@Entity('users')
@Index(['email'], { unique: true })
export class User {
    @ObjectIdColumn()
    _id: string;

    @Column({ name: 'first_name', length: 100 })
    firstName: string;

    @Column({ name: 'last_name',length: 100 })
    lastName: string;

    @Column()
    address: string;

    @Column()
    contact: string;

    @Column()
    email: string;

    @Column({ type: 'int' })
    age: number;

    @Column({ length: 10 })
    gender: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}