import Teams from '../database/models/TeamsModel';
import Matches from '../database/models/MatchesModel';

import IMatch from '../interfaces/IMatch';

export default class MatchesService {
  constructor(private model = Matches) { }

  async getAll(): Promise<Matches[]> {
    const matches = await this.model.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ] });

    return matches;
  }

  async getAllByProgress(inProgress: boolean): Promise<Matches[]> {
    const matches = await this.model.findAll({
      where: { inProgress },
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ] });
    return matches;
  }

  async create(match: IMatch): Promise<Matches> {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = match;
    const matchCreated = await this
      .model.create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true });
    return matchCreated;
  }

  async finishMatch(id: number): Promise<void> {
    await this.model.update({ inProgress: false }, { where: { id } });
  }
}
