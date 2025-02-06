import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CurrentUser } from '../current-user.decorator';
import { UserDocument } from './models/user.schema';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserDTO } from '@app/common';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getCurrentUser(@CurrentUser() user: UserDocument) {
    return user;
  }

  @MessagePattern({ cmd: 'get_user' }) 
  async getUser(@Payload() user: UserDTO) {
    return this.userService.getUser(user);
  }
}
