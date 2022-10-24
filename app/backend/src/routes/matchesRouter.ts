import { Router } from 'express';

import MatchesController from '../controllers/MatchesController';

const router = Router();

const loginController = new MatchesController();

router.get('/', (req, res) => loginController.getAll(req, res));

export default router;
