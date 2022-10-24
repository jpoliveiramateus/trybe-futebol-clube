import { Router } from 'express';

import validateLogin from '../middlewares/validateLogin';
import authMiddleware from '../middlewares/authMiddleware';

import LoginController from '../controllers/LoginController';
import LoginService from '../services/LoginService';

const loginService = new LoginService();
const loginController = new LoginController(loginService);
const router = Router();

router.get('/validate', authMiddleware, (req, res) => loginController.validate(req, res));

router.post('/', validateLogin, (req, res) => loginController.login(req, res));

export default router;
