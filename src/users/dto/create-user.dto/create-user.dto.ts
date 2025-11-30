import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

// 📋 DTO pour la création d'un utilisateur
export class CreateUserDto {
  @IsNotEmpty({ message: "L'email est obligatoire." })
  @IsEmail({}, { message: 'Veuillez entrer un email valide.' })
  email: string;

  @IsNotEmpty({ message: 'Le mot de passe est obligatoire.' })
  @IsString({ message: 'Le mot de passe doit être une chaîne.' })
  @MinLength(6, { message: 'Le mot de passe doit contenir au moins 6 caractères.' })
  password: string;
}