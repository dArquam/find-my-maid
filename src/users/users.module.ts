import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Worker } from '../workers/entities/worker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Worker])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
