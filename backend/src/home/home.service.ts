import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Home } from '../home/home.entity';
import { UserHomeDetails } from '../user_home/user_home.entity';
import { User } from '../user/user.entity';


@Injectable()
export class HomeService {
    constructor(
        @InjectRepository(Home)
        private readonly homeRepository: Repository<Home>,
        @InjectRepository(UserHomeDetails)
        private readonly userHomeRepository: Repository<UserHomeDetails>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findByUser(username: string, page: number = 1): Promise<Home[] | any> {
        if (!username) {
            return 'Username is required';
        }
        const pageSize = 50;
        const userHomes = await this.userHomeRepository.find({
            where: { username },
            skip: (page - 1) * pageSize,
            take: pageSize,
        });
        if (userHomes.length === 0) {
            return 'No homes found for this user';
        }
        const homeAddresses = userHomes.map((userHome) => userHome.street_address);
        const homes = await this.homeRepository.find({
            where: { street_address: In(homeAddresses) },
        });
        return { message: 'Homes retrieved successfully', homes };
    }

    async updateUsers(streetAddress: string, newUsers: string[]): Promise<User[] | any> {
        if (!streetAddress) {
            return  'Street address is required' ;
        }
        if (!newUsers || newUsers.length === 0) {
            return 'At least one user is required';
        }
        await this.userHomeRepository.delete({ street_address: streetAddress });
        const newUserHomes = newUsers.map((username) => ({
            username,
            street_address: streetAddress,
        }));
        await this.userHomeRepository.save(newUserHomes);
        const updatedUsers = await this.userRepository.find({
            where: { username: In(newUsers) },
        });
        return { message: 'Users updated successfully', updatedUsers };
    }
}
