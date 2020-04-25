import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './users.interface';
//import {MongooseModule} from '@nestjs/mongoose'

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Usersinterface', schema: UsersSchema,collection:'credentials' }])], // you need to create the UsersSchema,
    controllers: [UsersController],
    providers: [UsersService],
  })
  export class UsersModule {}
