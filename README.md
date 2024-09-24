
# Aplicação de Gerenciamento de Filmes

## Descrição

Esta aplicação foi desenvolvida para gerenciar filmes, permitindo que os usuários criem, listem, recuperem por ID, alterem por ID e excluam filmes por ID. Ela segue os princípios da Clean Architecture, separando a lógica de aplicação, domínio, infraestrutura e interfaces.

## Índice

- [Casos Uso](#uso)
- [Casos de Uso Disponíveis](#casos-de-uso-disponíveis)
- [Explicação do Uso](#Explicação-do-Uso)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Casos Uso

- **`criarFilme`**
- **`listarTodosFilmes`**
- **`buscarFilmePorId`**
- **`atualizarFilmePorId`**
- **`deletarFilme`**

## Casos de Uso Disponíveis

- **CreateMovieUseCase**: Responsável por criar novos registros de filmes.
- **ListAllMoviesUseCase**: Responsável por listar todos os filmes do repositório.
- **ListMovieByIdUseCase**: Responsável por buscar um filme específico pelo ID.
- **UpdateMovieByIdUseCase**: Responsável por atualizar e um filme específico pelo ID.
- **DeleteMovieUseCase**: Responsável por deletar um filme do repositório.


## Explicação do Uso:

- **`criarFilme`**: Usa o controlador para criar um novo filme, enviando os dados do filme como um objeto.
- **`listarTodosFilmes`**: Faz uma chamada para o controlador para listar todos os filmes disponíveis.
- **`buscarFilmePorId`**: Busca detalhes de um filme específico pelo seu ID.
- **`atualizarFilmePorId`**: Busca um filme específico e faz atualização/alteração pelo seu ID.
- **`deletarFilme`**: Deleta um filme específico pelo ID fornecido.

## Estrutura do Projeto

O projeto é estruturado seguindo os princípios da Clean Architecture, com a separação de responsabilidades e tornando mais escalável. Abaixo está uma visão geral da estrutura de pastas:

```
src/
├── application/                        # Camada de lógica de aplicação (Casos de Uso)
│   ├── repositories/
│   │   └── book-repository.ts           # Interface que define os métodos do repositório
│   │   └── id-generator-interface.ts    # Interface que define o gerador de ID
│   └── use-cases/
│       ├── create-movie-use-case.ts     # Caso de uso para criar um filme
│       ├── list-all-movies-use-case.ts  # Caso de uso para listar todos os filmes
│       ├── list-movie-by-id-use-case.ts # Caso de uso para listar um filme por ID
│       └── delete-movie-use-case.ts     # Caso de uso para excluir um filme
│
├── domain/                             # Camada de domínio (Modelos de Domínio)
│   └── movie.ts                        # Definição da entidade Filme
│
├── infrastructure/                     # Camada de infraestrutura (Banco de Dados, Utilitários)
│   ├── database/
│   │   └── repository.ts               # Implementação do repositório de filmes
│   └── utils/
│       └── config.ts                   # Configuração de dependências
│       └── id-generator.ts             # Implementação do gerador de ID
│
├── interface/                          # Camada de interfaces (Controladores, Requisições HTTP)
│   └── movie-controller.ts             # Controlador que lida com requisições HTTP para filmes
│   └── index.ts                        # Ponto de entrada para os controladores
```

