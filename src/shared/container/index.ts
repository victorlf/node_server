import { container } from 'tsyringe';

import { IMeasuresRepository } from '../../modules/measures/repositories/IMeasuresRepository';
import { MeasuresRepository } from '../../modules/measures/repositories/implementations/MeasuresRepository';

container.registerSingleton<IMeasuresRepository>(
    'MeasuresRepository',
    MeasuresRepository,
);
