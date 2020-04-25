import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import {Usersdto} from './users.dto'
import {Usersinterface} from './users.interface'
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { JwtPayload } from 'src/auth/jwt-payload.interface';
import { Interface } from 'readline';

@Injectable()
export class UsersService {
    private hashLength = 16;
    //constructor(@Inject('Usersinterface') private readonly userModel:Model<Usersinterface>) {}
    constructor(@InjectModel('Usersinterface') private readonly userModel: Model<Usersinterface>) {}
    //constructor(@InjectModel('UserModelToken') private readonly userModel:Model<Usersinterface>) {}

    async create(createUser: Usersdto): Promise<Usersinterface> {
        createUser.password = await this.getHash(createUser.password);
        const createdUser = new this.userModel(createUser);
        return await createdUser.save();
    }

    async findOne(payload: JwtPayload): Promise<Usersinterface> {
        return await this.userModel.findOne({ username: payload.username }).exec();
    }

    async getHash(password: string): Promise<string> {
        return bcrypt.hash(password, this.hashLength);
    }

    async compareHash(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

}
