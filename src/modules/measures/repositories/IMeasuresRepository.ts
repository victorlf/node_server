import { Measure } from '../entities/Measure';

interface ICreateMeasureDTO {
    sensor: string;
    temperature: number;
    pressure: number;
    humidity: number;
    battery: number;
}

interface IMeasuresRepository {
    findByName(name: string): Promise<Measure[]>;
    list(): Promise<Measure[]>;
    create({
        sensor,
        temperature,
        pressure,
        humidity,
        battery,
    }: ICreateMeasureDTO): Promise<void>;
}

export { IMeasuresRepository, ICreateMeasureDTO };
