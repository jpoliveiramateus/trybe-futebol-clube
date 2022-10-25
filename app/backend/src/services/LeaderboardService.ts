import sequelize from '../database/models';

import leaderboardQuery from '../helpers/leaderboardQuery';

export default class LeaderboardService {
  constructor(private model = sequelize) { }

  async getAll() {
    const [leaderboard] = await this.model.query(leaderboardQuery);
    return leaderboard;
  }
}
