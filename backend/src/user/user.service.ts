import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, In } from 'typeorm';
import { User } from './user.entity';
import { UserHomeDetails } from '../user_home/user_home.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserHomeDetails)
    private readonly userHomeRepository: Repository<UserHomeDetails>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findByHome(streetAddress: string): Promise<User[] | any> {
    if (!streetAddress) {
      return { message: 'Street address is required' };
    }
    const userHomes = await this.userHomeRepository.find({
      where: {
        street_address: Like(`%${streetAddress}%`), 
      },
    });
    if (userHomes.length === 0) {
      return { message: 'No users found for this home' };
    }
    const usernames = userHomes.map((userHome) => userHome.username);
    const users = await this.userRepository.find({
      where: { username: In(usernames) },
    });
    return { message: 'Users retrieved successfully', users };
  }
}


