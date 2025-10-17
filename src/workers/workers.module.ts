import { Module } from '@nestjs/common';
import { WorkersController } from './workers.controller';
import { WorkersService } from './services/workers/workers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Worker } from './entities/worker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Worker])],
  controllers: [WorkersController],
  providers: [WorkersService]
})
export class WorkersModule {}
