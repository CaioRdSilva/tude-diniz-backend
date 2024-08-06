import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Atividade } from 'src/atividade/entities/atividade.entity';
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;
}