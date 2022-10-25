import sequelize from '../database/models';

import leaderboardAwayQuery from '../helpers/leaderboardAwayQuery';
import leaderboardHomeQuery from '../helpers/leaderboardHomeQuery';

export default class LeaderboardService {
  constructor(private model = sequelize) { }

  async getAllByHome() {
    const [leaderboardByHome] = await this.model.query(leaderboardHomeQuery);
    return leaderboardByHome;
  }

  async getAllByAway() {
    const [leaderboardByAway] = await this.model.query(leaderboardAwayQuery);
    return leaderboardByAway;
  }
}
