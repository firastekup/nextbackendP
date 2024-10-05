import { Controller, Get, Post, Body, Param, Patch, Delete, HttpException, HttpStatus } from '@nestjs/common';
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
    const user = await this.userService.createUser(name, email, password, role);
    if (!user) {
      throw new HttpException('Failed to create user', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') userId: number): Promise<User> {
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() updateData: Partial<User>): Promise<User> {
    const updatedUser = await this.userService.updateUser(id, updateData);
    if (!updatedUser) {
      throw new HttpException('Failed to update user', HttpStatus.BAD_REQUEST);
    }
    return updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
