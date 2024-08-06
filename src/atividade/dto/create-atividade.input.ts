import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAtividadeInput {
  @IsString()
  @IsNotEmpty({message: 'Campo Titulo obrigatório'})
  @Field()
  titulo: string;

  @IsString()
  @IsNotEmpty({message: 'Campo Cor obrigatório'})
  @Field()
  cor: string;

  @IsString()
  @IsNotEmpty({message: 'Campo descricao obrigatório'})
  @Field()
  descricao: string;


  @IsString()
  @IsNotEmpty({message: 'Campo ususarioId obrigatório'})
  @Field()
  usuarioId: string;
}
