import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/user.dto';
import { dataSource } from '../data.source';

@Injectable()
export class UserService {
  // constructor(
  //   @InjectRepository(User)
  //   private userRepository: Repository<User>,
  // ) {}

  async createUser(createUserDto: CreateUserDto) {
    const userRepository = dataSource.getRepository(User);
    const newUser = await userRepository.create(createUserDto);
    return await userRepository.save(newUser);
  }

  async getAllProfile() {
    return dataSource.getRepository(User).find();
  }

  async getProfile(id: number) {
    const user = await dataSource.getRepository(User).findOneBy({ id });
    // const user = await this.userRepository.findOne();

    if (!user) {
      // throw new NotFoundException('User not found');
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async deleteUser(userId: number) {
    const result = await dataSource.getRepository(User).delete(userId);
    if (!result.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}
