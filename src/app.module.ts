import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 📦 Import TypeORM
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // 🔗 Configuration de la connexion MongoDB
    TypeOrmModule.forRoot({
      type: 'mongodb', // 🔑 Type de BDD
      host: 'localhost', // 🏠 Adresse (Compass utilise localhost)
      port: 27017, // 🚪 Port par défaut MongoDB
      database: 'users_db', // 📦 Nom de la base (sera créée auto)
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 📋 Toutes les entités
      synchronize: true, // ⚙️ Créer collections auto (DEV only!)
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
