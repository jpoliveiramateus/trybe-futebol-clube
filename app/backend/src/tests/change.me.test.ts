import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste da rota básica "/"', () => {
  describe('quando a requisição é feita com sucesso', () => {
    it('deve retornar uma messagem de "ok"', async () => {
      const httpResponse = await chai.request(app).get('/');
      expect(httpResponse.body).to.deep.equal({ ok: true });
    });
  });
});
