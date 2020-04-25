import { Controller, Post, Body, HttpStatus, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { Usersdto } from './users.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}
    @Post('create')
    async create(@Body() createUser: Usersdto) {
        const duplicateUser = await this.usersService.findOne(createUser);
        if (!duplicateUser) {
            this.usersService.create(createUser);
            return { status: HttpStatus.CREATED };
        } else {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                error: 'Username already taken',
            }, HttpStatus.CONFLICT);
        }
    }

}
