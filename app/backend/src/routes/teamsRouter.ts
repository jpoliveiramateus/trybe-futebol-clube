import { Router } from 'express';
import TeamsController from '../controllers/TeamsController';

const router = Router();

const teamsController = new TeamsController();

router.get('/:id', (req, res) => teamsController.getById(req, res));

router.get('/', (req, res) => teamsController.getAll(req, res));

export default router;
