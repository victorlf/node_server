import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListMeasuresUseCase } from './ListMeasuresUseCase';

class ListMeasuresController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listMeasureUseCase = container.resolve(ListMeasuresUseCase);

        const all = await listMeasureUseCase.execute();

        return response.json(all);
    }
}

export { ListMeasuresController };
