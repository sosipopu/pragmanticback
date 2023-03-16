import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getUsers() {
    return this.userService.findUsers();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createUser(@Body() createUserDto: CreateUserDto) {
    const { ...userDetails } = createUserDto;
    this.userService.createUsers(userDetails);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteUserById(@Param('id', ParseIntPipe) id: number) {
    this.userService.deleteUser(id);
  }
<<<<<<< Updated upstream
=======

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUserById(id);
  }
>>>>>>> Stashed changes
}
