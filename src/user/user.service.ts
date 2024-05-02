import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  async getAllProfile() {
    return this.userRepository.find();
  }

  async getProfile(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    // const user = await this.userRepository.findOne();

    if (!user) {
      // throw new NotFoundException('User not found');
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async deleteUser(userId: number) {
    const result = await this.userRepository.delete(userId);
    if (!result.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}
