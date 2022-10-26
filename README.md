
# ⚽ Trybe Futebol Clube

O TFC é um site informativo sobre partidas e classificações de futebol!

![tfc](https://user-images.githubusercontent.com/99822908/197893222-e9b8bf64-e6cb-415d-b273-ff045ff426cd.png)


## 📋 Execute o projeto em sua máquina

Clone o repositório:

```
git clone git@github.com:jpoliveiramateus/trybe-futebol-clube.git
```

<details>
<summary><strong> ⚠️ Configurações mínimas para execução do projeto</strong></summary><br />

Na sua máquina você deve ter:

 - Sistema Operacional Distribuição Unix
 - Node versão 16
 - Docker
 - Docker-compose versão >=1.29.2

➡️ O `node` deve ter versão igual ou superior à `16.14.0 LTS`:
  - Para instalar o nvm, [acesse esse link](https://github.com/nvm-sh/nvm#installing-and-updating);
  - Rode os comandos abaixo para instalar a versão correta de `node` e usá-la:
    - `nvm install 16.14 --lts`
    - `nvm use 16.14`
    - `nvm alias default 16.14`

➡️ O`docker-compose` deve ter versão igual ou superior à`ˆ1.29.2`:
  * Use esse [link de referência para realizar a instalação corretamente no ubuntu](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/2f1a5c4d-74b1-488a-8d9b-408682c93724/lesson/b883b81d-21f6-4b60-aa62-8508f6017ea0);
  * Acesse o [link da documentação oficial com passos para desinstalar](https://docs.docker.com/compose/install/#uninstallation) caso necessário.

</details>

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary>
  
  <br/>

  > :information_source: Rode os serviços com o comando `docker-compose up -d --build`.

</details>

## 🔎 Documentação da API

## 👨🏻‍💻 Habilidades

- Realização da dockerização dos apps, network, volume e compose;
- Modelagem de dados com MySQL através do Sequelize;
- Criação e associação de tabelas usando models do sequelize;
- Construção de uma API REST com endpoints para consumir os models criados;
- Construção de um CRUD com TypeScript, utilizando ORM;
- Validar dados das requisições com a biblioteca Joi.
- Implementar testes de integração com Mocha, Chai e Sinon.

## 🧪 Executando os testes

Entre na pasta do backend ```cd app/backend```

```
npm run test
```

![Captura de tela de 2022-10-26 10-52-53](https://user-images.githubusercontent.com/99822908/198052383-4fcb9b71-4147-48a2-ae1d-74495e34c93d.png)

Testes de cobertura:

```
npm run test:coverage
```

![Captura de tela de 2022-10-25 19-09-31](https://user-images.githubusercontent.com/99822908/198052434-3084e8f0-3609-4a8a-b8f7-b015cd7308f4.png)


## 🛠️ Ferramentas & Metodologias Utilizadas

- [Node.js](https://nodejs.org/en/);
- [Express.js](https://expressjs.com/);
- [MySQL](https://www.mysql.com/);
- [mysql2](https://www.npmjs.com/package/mysql2);
- [Sequelize(ORM)](https://sequelize.org/);
- [JWT(Autenticação)](https://jwt.io/);
- [Joi](https://joi.dev/api/?v=17.6.0);
- [Docker](https://www.docker.com/);
- [TypeScript](https://www.typescriptlang.org/);
- [Mocha](https://mochajs.org/);
- [Chai](https://www.chaijs.com/);
- [Sinon.js](https://sinonjs.org/);

---
⌨️ desenvolvido por [João Pedro Oliveira](https://www.linkedin.com/in/jpoliveira7/) 😄

