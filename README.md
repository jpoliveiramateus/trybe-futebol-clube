
# Trybe Futebol Clube

O TFC é um site informativo sobre partidas e classificações de futebol! ⚽

![tfc](https://user-images.githubusercontent.com/99822908/197893222-e9b8bf64-e6cb-415d-b273-ff045ff426cd.png)

## Documentação da API

#### Faz o login

```http
  POST /login 
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.


## Stack utilizada

**Back-end:** Node, Express, TypeScript, Sequelize, JWT, Mocha, Chai, Sinon.

