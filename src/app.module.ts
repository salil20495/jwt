import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { UsersModule } from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose'
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UsersModule,AuthModule,MongooseModule.forRoot("mongodb://localhost:27017/credentials",{ useNewUrlParser: true })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
