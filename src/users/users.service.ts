import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find(user => user.username === username);
  // }

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ username : username});
  }

  findOnSeach(
    username?: string,
    firstName?: string,
    lastName?: string,
    nickName?: string,
  ): Promise<User> {
    return this.usersRepository.query(
      `SELECT * FROM user WHERE username LIKE \"%${username}%\" 
      OR firstName LIKE \"%${firstName}%\" 
      OR lastName LIKE \"%${lastName}%\" 
      OR nickName LIKE \"%${nickName}%\"`,
    );
  }

  async findOnebyUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ username });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
