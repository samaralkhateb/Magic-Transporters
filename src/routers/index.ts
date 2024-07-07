// routers/index.ts
import { Router } from 'express';
import * as magicController from '../controllers/magicController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.post('/movers', asyncHandler(magicController.addMover));
router.post('/items', asyncHandler(magicController.addItem));
router.post('/movers/:id/load', asyncHandler(magicController.loadMover)); // Ensure correct route parameter definition
router.post('/movers/:id/start', asyncHandler(magicController.startMission));
router.post('/movers/:id/end', asyncHandler(magicController.endMission));
router.get('/movers', asyncHandler(magicController.getTopMovers));

export default router;
