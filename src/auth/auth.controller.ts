import { Controller, Post, Body, Req, Res } from '@nestjs/common';
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
    return this.authService.login(email, password);
  }

  @Post('logout')
  async logout(@Req() request: Request, @Res() response: Response) {
    // Here you can handle token invalidation if needed
    response.clearCookie('access_token'); // Clear the cookie if you're using cookies for JWT
    return response.status(200).json({ message: 'Logout successful' });
  }
}