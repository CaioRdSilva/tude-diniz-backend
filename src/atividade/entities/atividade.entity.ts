import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableForeignKey } from 'typeorm';

@ObjectType()
@Entity()
export class Atividade {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  titulo: string;

  @Column()
  cor: string;

  @Column()
  descricao: string;

  @ManyToOne(() => User,  {
    eager: true
  })
  @JoinColumn()
  @Field(() => User)
  usuario: User
}