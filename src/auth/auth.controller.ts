import { Controller, Post, Body, Req, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') role: string,
  ) {
    return this.authService.register(name, email, password, role);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const { access_token, user } = await this.authService.login(email, password);
    return {
      message: 'Login successful',
      access_token,
      user,
      redirectTo: user.role === 'admin' ? '/admin/dashboard' : '/user/dashboard',
    };
  }

  @Post('logout')
  async logout(@Res() response: Response) {
    response.clearCookie('access_token');
    return response.status(HttpStatus.OK).json({ message: 'Logout successful' });
  }
}
