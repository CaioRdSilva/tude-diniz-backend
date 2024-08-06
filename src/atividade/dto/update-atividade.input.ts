import { IsOptional, IsString } from 'class-validator';
import { CreateAtividadeInput } from './create-atividade.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAtividadeInput extends PartialType(CreateAtividadeInput) {
  @IsString()
  @IsOptional()
  titulo?: string;

  @IsString()
  @IsOptional()
  cor?: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  @IsString()
  @Field()
  usuarioId?: string;
}
