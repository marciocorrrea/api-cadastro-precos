# API-REST

#### API para cadastro de preços no banco de dados usanso as seguintes técnologias:

- NodeJs
- Express
- Postgres
- Sequelize
- Docker
- JWT

##Instalação

**1. Instalar dependencias:**

```shell
$ npm install
```
**2. Criar banco de dados:**

A. Caso tenha docker em seu computadir execute no terminal:

```
docker run \
 --name postgres \
 -e POSTGRES_USER=postgres \
 -e POSTGRES_PASSWORD=postgres \
 -e POSTGRES_DB=Produtos \
 -p 5432:5432 \
 -d \
 postgres
```
```shell
npx sequelize db:migrate
```
B: Caso prefira não usar docker e já tenha o Postgres instalado em seu computador execute:

    npm run prestart

**3. Iniciar Porjeto:**

        npm start

## Rotas

| Métodos  | Endereço  | Retorno |
| ------------ |---------------|-----|
| `POST`      | /auth       | Autenticar  |
| `GET`      | /item-precos        | todos os dados  |
| `GET`      | /item-precos/?page=1&limit=2      | Paginação |
| `GET`      | /item-precos/{id}        | Selecionar único |
| `POST`      | /item-precos/        | Cadastrar |
| `PUT`      | /item-precos/{id}        | Editar |
| `PATCH`      | /item-precos/{id}        | Editar |
| `DELETE`      | /item-precos/{id}        | Deletar |

## Info
A rota de autenticação espera a senha que está no arquivo .env!
