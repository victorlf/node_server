import { getRepository, Repository } from 'typeorm';

import { Measure } from '../../entities/Measure';
import { IMeasuresRepository, ICreateMeasureDTO } from '../IMeasuresRepository';

class MeasuresRepository implements IMeasuresRepository {
    private repository: Repository<Measure>;

    constructor() {
        this.repository = getRepository(Measure);
    }

    async create({
        sensor,
        temperature,
        pressure,
        humidity,
        battery,
    }: ICreateMeasureDTO): Promise<void> {
        const measure = this.repository.create({
            sensor,
            temperature,
            pressure,
            humidity,
            battery,
        });

        await this.repository.save(measure);
    }

    async list(): Promise<Measure[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(sensor: string): Promise<Measure[]> {
        const measures = await this.repository.find();

        return measures;
    }
}

export { MeasuresRepository };
