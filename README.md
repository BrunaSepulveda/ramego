## Descrição

Este projeto foi desenvolvido com o [Nest](https://github.com/nestjs/nest), o banco de dados [MongoDB](https://www.mongodb.com/) e um container [Docker](https://docs.docker.com/).
Essa é uma aplicação de teste.

## Objetivo

Construir uma API para uma aplicação web chamada RamenGo, uma plataforma para que o usuário possa montar um pedido de ramen, escolhendo os tipos de caldos e proteínas do prato.

Você deverá criar endpoints em sua API que fornecerão as opções disponíveis de caldos e proteínas.

Esses endpoints deverão retornar dados que serão utilizados para popular listas de seleção para o usuário, no qual o mesmo poderá selecionar apenas uma opção de cada lista para montar o seu pedido.

Além dos endpoints de listagem, você deverá criar um endpoint que permitirá ao usuário fazer um pedido. Este endpoint deverá receber as seleções do usuário e processar o pedido, retornando uma confirmação com um código do pedido.

## Requisitos Técnicos

- Não há restrição de linguagem de programação; você pode usar a tecnologia com a qual se sinta mais confortável.

- O contrato da API pode ser encontrado [nesta página](https://tech.redventures.com.br/docs/index.html).

- O número do pedido deve ser obtido através do endpoint abaixo:

  - POST
    <br>
    `https://api.tech.redventures.com.br/orders/generate-id`

  - Header
    <br>
    `'x-api-key': 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf'`

## Inicializando o servidor

Para iniciar o servidor do banco execute o seguinte comando:

```bash
docker compose -f docker-compose.yml up -d
```

- O que este comando faz?
  - Inicializa um servidor em um container docker
  - Cria as collections usadas nesse projeto e popula duas collections usando as informações do arquivo init.js que está na raiz do projeto

## Instalações das dependências

```bash
$ npm install
```

## Executando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
