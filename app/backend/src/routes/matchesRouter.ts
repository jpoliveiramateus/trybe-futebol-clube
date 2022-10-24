import { Router } from 'express';

import authMiddleware from '../middlewares/authMiddleware';

import MatchesController from '../controllers/MatchesController';

const router = Router();

const loginController = new MatchesController();

router.post('/', authMiddleware, (req, res) => loginController.create(req, res));

router.get('/', (req, res) => loginController.getAll(req, res));

export default router;
