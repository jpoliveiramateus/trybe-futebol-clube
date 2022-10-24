import { Request, Response } from 'express';

import MatchesService from '../services/MatchesService';

export default class MatchesController {
  private _matchesService: MatchesService;

  constructor() {
    this._matchesService = new MatchesService();
  }

  async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;

    if (!inProgress) {
      const teams = await this._matchesService.getAll();
      return res.status(200).json(teams);
    }

    const teamsByProgress = await this._matchesService.getAllByProgress(inProgress === 'true');
    return res.status(200).json(teamsByProgress);
  }

  async create(req: Request, res: Response) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

    const matchCreated = await this
      ._matchesService.create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals });
    res.status(201).json(matchCreated);
  }

  async finishMatch(req: Request, res: Response) {
    const { id } = req.params;
    await this._matchesService.finishMatch(Number(id));

    return res.status(200).json({ message: 'Finished' });
  }
}
