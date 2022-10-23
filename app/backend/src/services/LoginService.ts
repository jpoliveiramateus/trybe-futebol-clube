import { compare } from 'bcryptjs';

import generateToken from '../helpers/generateToken';
import Users from '../database/models/UsersModel';
import IUserLogin from '../interfaces/IUserLogin';

export default class LoginService {
  constructor(private model = Users) { }

  async login(user: IUserLogin) {
    const { email, password } = user;

    const userFound = await this.model.findOne({ where: { email } });

    if (!userFound) {
      throw new Error('Usuário não encontrado!');
    }

    const validPassword = await compare(password, userFound.password);

    if (!validPassword) {
      throw new Error('Senha inválida!');
    }

    const token = generateToken(userFound.id, userFound.role);
    return token;
  }
}
