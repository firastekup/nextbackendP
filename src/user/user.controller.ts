import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
      @Body('name') name: string,
      @Body('email') email: string,
      @Body('password') password: string,
      @Body('role') role: string,
  ): Promise<User> { 
      return this.userService.createUser(name, email, password, role);
  } 

  @Get()
  async getUsers(): Promise<User[]> { 
      return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') userId: number): Promise<User> { 
      return this.userService.getUserById(userId);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() updateData: Partial<User>): Promise<User> { 
      return this.userService.updateUser(id, updateData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> { 
      return this.userService.deleteUser(id);
  }
}