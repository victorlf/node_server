import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateMeasureUseCase } from './CreateMeasureUseCase';

class CreateMeasureController {
    async handle(request: Request, response: Response): Promise<Response> {
        const sensor = request.query.sensor.toString();
        const temperature = parseFloat(request.query.temperature.toString());
        const pressure = parseFloat(request.query.pressure.toString());
        const humidity = parseFloat(request.query.humidity.toString());
        const battery = parseFloat(request.query.voltage.toString());

        const createMeasureUseCase = container.resolve(CreateMeasureUseCase);

        await createMeasureUseCase.execute({
            sensor,
            temperature,
            pressure,
            humidity,
            battery,
        });

        return response.status(201).send();
    }
}

export { CreateMeasureController };
