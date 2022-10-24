import Teams from '../database/models/TeamsModel';

import ITeam from '../interfaces/ITeam';

export default class TeamsService {
  constructor(private model = Teams) { }

  async getAll(): Promise<ITeam[]> {
    const teams = await this.model.findAll();
    return teams;
  }
}
