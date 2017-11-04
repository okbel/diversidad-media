# Diversidad Media 

[Español](README-es.md)

Diversidad Media is a platform to generate more diverse spaces, through Movies, Books, Music, and otehrs. The project is in fast growth and there are many things to do. We are still covering the basic.

Here you can find more information (Spanish):
https://medium.com/@okbel/diversidad-media-e0783f3e20de

## Running the project

### Prerequisites

* [Yarn](https://yarnpkg.com/en/) (recommended)
* [dotenv](https://github.com/bkeepers/dotenv) (recommended)
* [nodemon](https://github.com/remy/nodemon)
* [TMDB key](https://developers.themoviedb.org/3/getting-started)
* [Google Books API key](https://developers.google.com/books/)

### Setup

Create a `.env` file with your keys, following `.env.example` format.

### Install dependencies

```sh
yarn # or npm install
```

### Server

The server connects to TMDB, Google Books and any other backend provider.
By default it listens to port 3000, but you can use another one setting
the `DM_SERVER_PORT` environment variable.

```sh
dotenv yarn watch-server # or dotenv npm run watch-server
```

### Client

The client serves the browser and proxies any backend request to the server.
By default it listens to port 3001, but you can use another one setting
the `DM_CLIENT_PORT` environment variable.

```sh
yarn watch-client # or dotenv npm run watch-client
```

## Active Contributors
Belén Curcio [@okbel](http://twitter.com/okbel) - Frontend and Backend Development - Content


[diversidadmedia.com](diversidadmedia.com)
Diversidad Media 2017
