import { inject, injectable } from 'tsyringe';

import { Measure } from '../../entities/Measure';
import { IMeasuresRepository } from '../../repositories/IMeasuresRepository';

@injectable()
class ListMeasuresUseCase {
    constructor(
        @inject('MeasuresRepository')
        private measuresRepository: IMeasuresRepository,
    ) {}

    async execute(): Promise<Measure[]> {
        const measures = await this.measuresRepository.list();

        return measures;
    }
}

export { ListMeasuresUseCase };
