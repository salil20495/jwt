import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from 'src/users/users.interface';
//import { UserServiceProvider } from 'src/users/users.provider';

@Module({
    imports: [MongooseModule.forFeature([{name:'Usersinterface',schema:UsersSchema}]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions: {
                expiresIn: 3600,
            },
        }),
        AuthModule,UsersModule
    ],
    controllers: [AuthController],
    providers: [
        UsersService,
        AuthService,
        JwtStrategy,
        AuthService
        // ...UserServiceProvider,
    ],
})
export class AuthModule { }

