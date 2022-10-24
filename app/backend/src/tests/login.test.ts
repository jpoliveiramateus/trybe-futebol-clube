import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import tokenFunction from '../helpers/generateToken';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste da rota de login "/login"', () => {
  describe('quando o login falha', () => {
    it('deve retornar um status "401" ao acessar com email inválido', async () => {
      const httpResponse = await chai.request(app).post('/login').send({
        email: 'teste@teste.com',
        password: 'secret_admin',
      });

      expect(httpResponse.status).to.be.equal(401);
      expect(httpResponse.body).to.deep.equal({ message: 'Incorrect email or password' });
    });

    it('deve retornar um status "401" ao acessar com senha inválida', async () => {
      const httpResponse = await chai.request(app).post('/login').send({
        email: 'admin@admin.com',
        password: 'teste_teste',
      });

      expect(httpResponse.status).to.be.equal(401);
      expect(httpResponse.body).to.deep.equal({ message: 'Incorrect email or password' });
    });
  });

  describe('quando o login é feito com sucesso', () => {
    beforeEach(() => sinon.stub(tokenFunction, 'generateToken').resolves('random_token'))
    afterEach(sinon.restore);

    it('deve retornar o token com o status "200"', async () => {
      const httpResponse = await chai.request(app).post('/login').send({
        email: 'admin@admin.com',
        password: 'secret_admin',
      });

      expect(httpResponse.status).to.be.equal(200);
      expect(httpResponse.body).to.deep.equal({ token: 'random_token' });
    });
  });
});

describe('Teste da rota de validação "/login/validate"', () => {
  describe('quando a validação falha', () => {
    it('deve retorar um erro com status "401" ao tentar acessar sem o token', async () => {
      const httpResponse = await chai.request(app).get('/login/validate').send();

      expect(httpResponse.status).to.be.equal(401);
      expect(httpResponse.body).to.deep.equal({ message: 'Token not found' });
    });

    it('deve retorar um erro com status "401" ao tentar acessar com um token inválido', async () => {
      const httpResponse = await chai.request(app).get('/login/validate')
        .send().set('Authorization', 'token_inválido');

      expect(httpResponse.status).to.be.equal(401);
      expect(httpResponse.body).to.deep.equal({ message: 'Expired or invalid token' });
    });
  });
  
  describe('quando a validação é feita com sucesso', () => {
    beforeEach(() => sinon.stub(tokenFunction, 'generateToken')
      .resolves('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY2NjEwOTczfQ.TLub2yP8JKI7NsJZkCul9AwXBpZNKoreHDcnazrY8S8'))
    afterEach(sinon.restore);

    it('deve retorar um objeto contendo a função do usuário com o status "200"', async () => {
      const httpResponseLogin = await chai.request(app).post('/login').send({
        email: 'admin@admin.com',
        password: 'secret_admin',
      });

      const { token } = httpResponseLogin.body;

      const httpResponse = await chai.request(app).get('/login/validate')
        .send().set('Authorization', token);

      expect(httpResponse.status).to.be.equal(200);
      expect(httpResponse.body).to.deep.equal({ role: 'admin' });
    });
  });
});
