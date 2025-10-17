import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Worker } from '../workers/entities/worker.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Worker])],  
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
