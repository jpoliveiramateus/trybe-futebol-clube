import { Request, Response } from 'express';

import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  private _leaderboardService: LeaderboardService;

  constructor() {
    this._leaderboardService = new LeaderboardService();
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const leaderboard = await this._leaderboardService.getAll();
    return res.status(200).json(leaderboard);
  }
}
