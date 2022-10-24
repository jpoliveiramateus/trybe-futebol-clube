import { Request, Response } from 'express';

import TeamsService from '../services/TeamsService';

export default class TeamsController {
  private _teamsService: TeamsService;

  constructor() {
    this._teamsService = new TeamsService();
  }

  async getAll(req: Request, res: Response) {
    const teams = await this._teamsService.getAll();
    return res.status(200).json(teams);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const team = await this._teamsService.getById(Number(id));
    return res.status(200).json(team);
  }
}
