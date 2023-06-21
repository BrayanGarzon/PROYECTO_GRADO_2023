# Registro de cuidadanos

Este proyecto fue modelado con el patron de diseño `Test Driven Development (TDD)`, el cual consite en realizar pruebas para porteriormente dar la solucion a esas pruebas,
se creo la app `core`, en donde encontraremos todos los modelos de la aplicacion y las pruebas a los modelos, dentro de cada app se encontrara la carpeta tests, la cual contendra las pruebas para ese modulo.

Se crearon seis modelos, User, Category, Site y Comment.
El listado de usuarios es publico, la creacion de usuarios es de acceso publico, solo se podra editar y eliminar el usuario si se encuentre autenticado.

En el modulo de localizacion (Category, Site), el listado de registros es de acceso publico, crear, editar y eliminar es de acceso privado, se pide autenticacion por token y tiene que ser usuario admin.

Para el registro de ciudadanos, el listado de registros es privado, se fltra los registros por usuario, cada vez que se crea un registro, se asocia al usuario autenticado, no se tendra acceso a informacion que no este relacionada con ese usuario, se validaron los campos phone y no_identification, deben tener una logitud maxima de 10 caracteres

# Setup Project
Para ejecutar este proyecto con doker, ejecute el siguiente comando.
```bash
docker-compose up --build
```

Este comando creara los servicios de base de datos y servidor local necesarios para funcionar, el usuario de base de datos es `postgres` y la contraseña es `postgres`.


# routes

## User Routes
- http://localhost:8000/users/users/ (GET, POST, PUT, DELETE)
- http://localhost:8000/users/me/ (GET, POST, PUT, DELETE)
- http://localhost:8000/users/token/ (GET)

## Category Routes
- http://localhost:8000/location/countries/ (GET, POST)
- http://localhost:8000/location/countries/{id} (PUT, DELETE)

## Site Routes
- http://localhost:8000/location/sites/ (GET, POST)
- http://localhost:8000/location/sites/{id} (PUT, DELETE)

## Cities Routes
- http://localhost:8000/location/cities/ (GET, POST)
- http://localhost:8000/location/cities/{id} (PUT, DELETE)

## Comments Routes
- http://localhost:8000/register/comments/ (GET, POST)
- http://localhost:8000/register/comments/{id} (PUT, DELETE)

# Model Entity Relationship

![Alt text](static/prueba.png?raw=true "Title")