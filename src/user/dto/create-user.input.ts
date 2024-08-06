import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, isString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({message: 'Campo Nome obrigatório'})
  @Field()
  nome: string;

  @IsEmail()
  @IsNotEmpty({message: 'Campo Nome obrigatório'})
  @Field()
  email: string;
}
