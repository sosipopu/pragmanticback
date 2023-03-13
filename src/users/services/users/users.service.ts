import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/entities/User';
import { UserParams, User } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  createUsers(userDetails: UserParams) {
    const newUser = this.userRepository.create({ ...userDetails });
    return this.userRepository.save(newUser);
  }

  updateUser(id: number, updateUserDetails: UserParams) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }

  findUserById(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  findUserByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }
}
