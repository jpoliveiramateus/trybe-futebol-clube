import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

export default class LoginController {
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const token = await this.loginService.login({ email, password });
    return res.status(200).json({ token });
  }

  validate = (req: Request, res: Response): Response => {
    const { user } = req.body;
    return res.status(200).json({ role: user.role });
  };
}
