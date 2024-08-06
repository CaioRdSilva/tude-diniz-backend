import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AtividadeService } from './atividade.service';
import { Atividade } from './entities/atividade.entity';
import { CreateAtividadeInput } from './dto/create-atividade.input';
import { UpdateAtividadeInput } from './dto/update-atividade.input';

@Resolver(() => Atividade)
export class AtividadeResolver {
  constructor(private readonly atividadeService: AtividadeService) {}

  @Mutation(() => Atividade)
  createAtividade(
    @Args('createAtividadeInput') createAtividadeInput: CreateAtividadeInput,
  ) {
    return this.atividadeService.create(createAtividadeInput);
  }

  @Query(() => [Atividade])
  findAllAtividade() {
    return this.atividadeService.findAll();
  }

  @Query(() => Atividade, { name: 'atividade' })
  findOneAtividade(@Args('id', { type: () => String }) id: string) {
    return this.atividadeService.findOneById(id);
  }

  @Mutation(() => Atividade)
  updateAtividade(
    @Args('id') id: string,
    @Args('updateAtividadeInput') updateAtividadeInput: UpdateAtividadeInput,
  ) {
    return this.atividadeService.update(id, updateAtividadeInput);
  }

  @Mutation(() => Atividade)
  removeAtividade(@Args('id') id: string) {
    return this.atividadeService.remove(id);
  }
}
