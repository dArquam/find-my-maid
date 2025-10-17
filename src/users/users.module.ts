import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Worker } from '../workers/entities/worker.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Worker, User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
