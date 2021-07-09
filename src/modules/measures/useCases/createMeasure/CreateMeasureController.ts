import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateMeasureUseCase } from './CreateMeasureUseCase';

class CreateMeasureController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { sensor, temperature, pressure, humidity, battery } =
            request.body;

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
