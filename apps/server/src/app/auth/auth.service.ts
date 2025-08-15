import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginInput } from './dto/login.input';
import { UsersService } from '../users/users.service';
import { compare } from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService
  ) {}

  async login({ email, password }: LoginInput, res: Response) {
    const user = await this.validateUser({ email, password });
    const expiresIn = new Date();
    expiresIn.setMilliseconds(
      expiresIn.getTime() +
        parseInt(this.configService.getOrThrow('JWT_EXPIRES_IN'))
    );
    const tokenPayload: TokenPayload = {
      userId: user.id,
    };
    const token = this.jwtService.sign(tokenPayload);

    res.cookie('Authentication', token, {
      httpOnly: true,
      secure: this.configService.getOrThrow('NODE_ENV') === 'production',
      sameSite: 'strict',
      expires: expiresIn,
    });

    return user;
  }

  private async validateUser({ email, password }: LoginInput) {
    try {
      const user = await this.usersService.getUser({ email });

      if (!user) {
        throw new UnauthorizedException();
      }

      const autheticated = await compare(password, user.password);

      if (!autheticated) {
        throw new UnauthorizedException();
      }

      return user;
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
