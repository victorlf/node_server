import { inject, injectable } from 'tsyringe';

import { IMeasuresRepository } from '../../repositories/IMeasuresRepository';

interface IRequest {
    sensor: string;
    temperature: number;
    pressure: number;
    humidity: number;
    battery: number;
}

@injectable()
class CreateMeasureUseCase {
    constructor(
        @inject('MeasuresRepository')
        private measuresRepository: IMeasuresRepository,
    ) {}

    async execute({
        sensor,
        temperature,
        pressure,
        humidity,
        battery,
    }: IRequest): Promise<void> {
        // const measureAlreadyExists = await this.measuresRepository.findByName(
        //     sensor,
        // );

        // if (measureAlreadyExists) {
        //     throw new Error('Measure already exists!');
        // }

        this.measuresRepository.create({
            sensor,
            temperature,
            pressure,
            humidity,
            battery,
        });
    }
}

export { CreateMeasureUseCase };
