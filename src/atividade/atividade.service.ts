import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAtividadeInput } from './dto/create-atividade.input';
import { UpdateAtividadeInput } from './dto/update-atividade.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Atividade } from './entities/atividade.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AtividadeService {
  constructor(
    @InjectRepository(Atividade)
    private atividadeRepository: Repository<Atividade>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createAtividadeInput: CreateAtividadeInput): Promise<Atividade> {
    const user = await this.userRepository.findOneBy({
      id: createAtividadeInput.usuarioId,
    });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    const atividade = this.atividadeRepository.create({
      titulo: createAtividadeInput.titulo,
      cor: createAtividadeInput.cor,
      descricao: createAtividadeInput.descricao,
      usuario: {
        id: createAtividadeInput.usuarioId,
      },
    });
    const atividadeSaved = await this.atividadeRepository.save(atividade);
    if (!atividadeSaved) {
      throw new InternalServerErrorException('Falha ao criar usuário');
    }
    return atividadeSaved;
  }

  async findAll(): Promise<Atividade[]> {
    return await this.atividadeRepository.find();
  }

  async findOneById(id: string): Promise<Atividade> {
    const atividade = await this.atividadeRepository.findOneBy({ id });
    if (!atividade) {
      throw new NotFoundException('Atividade não encontrada');
    }
    return atividade;
  }

  async update(id: string, updateAtividadeInput: UpdateAtividadeInput) {
    const atividade = await this.findOneById(id);
    await this.atividadeRepository.update(atividade, {
      ...updateAtividadeInput,
    });
    const atividadeUpdated = this.atividadeRepository.create({
      ...atividade,
      ...updateAtividadeInput,
    });
    return atividadeUpdated;
  }

  async remove(id: string) {
    const atividade = await this.findOneById(id);
    const deleted = await this.atividadeRepository.delete(atividade);
    if (deleted) {
      return atividade;
    }
    return false;
  }
}
