import { Module } from '@nestjs/common';
import { AtividadeService } from './atividade.service';
import { AtividadeResolver } from './atividade.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atividade } from './entities/atividade.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Atividade, User])],
  providers: [AtividadeResolver, AtividadeService],
})
export class AtividadeModule {}
