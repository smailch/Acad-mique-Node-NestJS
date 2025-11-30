import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service'; // 📦 Import du service
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';

// 🎯 Controller pour gérer les endpoints liés aux utilisateurs
@Controller('users')
export class UsersController {
  // 🔑 Injection du service via le constructeur
  constructor(private readonly usersService: UsersService) {}

  // 📥 ENDPOINT 1 : POST /users - Créer un utilisateur
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    return await this.usersService.create(email, password);
  }

  // 🔓 ENDPOINT 2 : PUT /users/activate - Activer un compte avec vérification password
  @Put('activate')
  async activateUser(
    @Body() body: { email: string; password: string },
  ) {
    const user = await this.usersService.activateAccount(
      body.email,
      body.password,
    );

    if (!user) {
      throw new NotFoundException(
        'User not found or password incorrect',
      );
    }

    return {
      message: 'Account activated successfully',
      user,
    };
  }

  // ✅ ENDPOINT 3 : GET /users/active - Obtenir tous les utilisateurs actifs
  // ⚠️ IMPORTANT : Doit être AVANT /users/:id sinon "active" sera traité comme un ID
  @Get('active')
  async getActiveUsers() {
    return await this.usersService.findActive();
  }

  // 📧 ENDPOINT 4 : GET /users/email/:email - Obtenir un utilisateur par email
  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string) {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return user;
  }

  // 🔍 ENDPOINT 5 : GET /users/:id - Obtenir un utilisateur par ID
  // ⚠️ Doit être EN DERNIER car :id capture tout
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.usersService.findOneById(id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }
}