import { Router } from 'express';
import middleware from '../middlewares/validateLogin';
import LoginController from '../controllers/LoginController';

const loginController = new LoginController();
const router = Router();

router.post('/', middleware.validateLogin, (req, res) => loginController.login(req, res));

export default router;
