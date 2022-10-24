import { Router } from 'express';

import validateLogin from '../middlewares/validateLogin';
import authMiddleware from '../middlewares/authMiddleware';

import LoginController from '../controllers/LoginController';

const loginController = new LoginController();
const router = Router();

router.get('/validate', authMiddleware, (req, res) => loginController.validate(req, res));

router.post('/', validateLogin, (req, res) => loginController.login(req, res));

export default router;
