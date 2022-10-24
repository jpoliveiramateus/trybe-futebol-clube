import { Request, Response } from 'express';

import MatchesService from '../services/MatchesService';

export default class MatchesController {
  private _matchesService: MatchesService;

  constructor() {
    this._matchesService = new MatchesService();
  }

  async getAll(req: Request, res: Response) {
    const teams = await this._matchesService.getAll();
    return res.status(200).json(teams);
  }
}
