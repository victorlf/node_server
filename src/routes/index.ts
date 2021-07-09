import { Router } from 'express';

import { measuresRoutes } from './measures.routes';

const router = Router();

router.use('/measures', measuresRoutes);

export { router };
