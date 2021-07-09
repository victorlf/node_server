import { Router } from 'express';

import { CreateMeasureController } from '../modules/measures/useCases/createMeasure/CreateMeasureController';
import { ListMeasuresController } from '../modules/measures/useCases/listMeasures/ListMeasuresController';

const measuresRoutes = Router();

const createMeasureController = new CreateMeasureController();
const listMeasuresController = new ListMeasuresController();

measuresRoutes.post('/', createMeasureController.handle);

measuresRoutes.get('/', listMeasuresController.handle);

export { measuresRoutes };
