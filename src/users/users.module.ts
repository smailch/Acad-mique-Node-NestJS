import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 📦 Import TypeORM
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity'; // 📋 Import de l'entité

@Module({
  imports: [
    // 🔑 Enregistrer l'entité User pour ce module
    // Cela rend le Repository<User> disponible pour injection
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
