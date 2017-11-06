# Diversidad Media 

[Inglés](README.md)

Diversidad Media es una plataforma para generar espacios más diversos, ya sea mediante Películas, Libros, Musica, entre otros. El proyecto está en rápido crecimiento y hay muchas cosas por hacer. Estamos cubriendo lo básico todavia.

Acá podés encontrar más información:
https://medium.com/@okbel/diversidad-media-e0783f3e20de

## Corriendo el proyecto

### Prerequisitos

* [Yarn](https://yarnpkg.com/en/) (recomendado)
* [dotenv](https://github.com/bkeepers/dotenv) (recomendado)
* [nodemon](https://github.com/remy/nodemon)
* [TMDB key](https://developers.themoviedb.org/3/getting-started)
* [Google Books API key](https://developers.google.com/books/)
* [Youtube API key](https://console.cloud.google.com/apis/credentials)

### Configuración

Crear un archivo `.env` con tus claves, siguiendo el formato de  `.env.example`.

### Instalar dependencias

```sh
yarn # o npm install
```

### Servidor

El servidor se conecta a TMDB, Google Books y cualquier otro proveedor de datos.
Por defecto escucha en el puerto 3000, pero puedes optar por otro estableciendo
la variable de entorno `DM_SERVER_PORT`.

```sh
dotenv yarn watch-server # o dotenv npm run watch-server
```

### Cliente

El cliente sirve al explorador y redirige cualquier pedido que sea necesario al
backend. Por defecto escucha en el puerto 3000, pero puedes optar por otro
estableciendo la variable de entorno `DM_CLIENT_PORT`.

```sh
yarn watch-client # o dotenv npm run watch-client
```

## Active Contributors
Belén Curcio [@okbel](http://twitter.com/okbel) - Desarrollo Frontend y Backend - Contenido


[diversidadmedia.com](diversidadmedia.com)
Diversidad Media 2017
