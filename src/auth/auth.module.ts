import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Worker } from '../workers/entities/worker.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './services/strategy/jwt.strategy';


@Module({
  imports: [
    TypeOrmModule.forFeature([Worker]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'supersecretkey',
      signOptions: { expiresIn: '1d' },
    }),
],  
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
