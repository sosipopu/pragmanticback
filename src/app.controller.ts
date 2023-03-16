import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
<<<<<<< Updated upstream
=======
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/services/auth.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
>>>>>>> Stashed changes

@ApiBearerAuth()
@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

<<<<<<< Updated upstream
  @Get()
  getHello(): string {
    return this.appService.getHello();
=======
  @ApiOperation({ summary: 'Auth with email and password' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  @ApiOperation({ summary: 'Protected test route' })
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
>>>>>>> Stashed changes
  }
}
