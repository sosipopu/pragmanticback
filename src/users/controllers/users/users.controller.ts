import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {}

  @Post()
  createUser(@Body() createUserDto: createUserDto) {
    const { ...userDetails } = createUserDto;
    this.userService.createUsers(userDetails);
  }
}
