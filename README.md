<div style="display:flex; flex-direction: row; align-items:center;justify-content: space-between;">
<a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>

<a href="https://www.mysql.com/" target="blank"><img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" width="200" alt="MySQL" /></a>

<a href="https://www.docker.com/" target="blank"><img src="https://www.docker.com/sites/default/files/d8/2019-07/horizontal-logo-monochromatic-white.png" width="300" alt="Docker" /></a>

<a href="https://www.docker.com/" target="blank"><img src="https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2020/02/Compose.png" width="220" alt="Docker Compose" /></a>
</div>

## DESCRIPTION
---

* This project shows a REST API developed in ***NestJS***.

* This application runs in ***node*** on ***docker*** & ***docker-compose*** (*node: latest-alpine*)

* An entity, "*test*", based on ***TypeORM*** is used on the ***MySQL*** database.

* Import file ***postman-collection.json*** in Postman to test the four entry points of the API:
    * ***Create test***
        * [POST] /test
        * [BODY] {name: string}
    * ***Get all tests***
        * [GET] /test
    * ***Update test***
        * [PUT] /test/{{id}}
        * [BODY] {name: string}
    * ***Delete test***
        * [DELETE] /test/{{id}}
<br>
<br>

## TECHNOLOGIES
~~~
* NPM:              6.14.10
* Node:             14.15.4
* Angular CLI:      11.0.6
* Docker:           Docker version 19.03.6, build 369ce74a3c
* Docker Compose:   docker-compose version 1.21.2, build a133471
* IDE:              Visual Studio Code
~~~

## INSTALL DEPENDENCES
```sh
# Run in the project root
$ npm install
```
## RUN
```sh
# With Docker & Chrome debugger extension
# Run task "Launch app"

# With Docker
# Run task "Launch dockers" or
$ npm run app-start

# Running in your browser on http://localhost:4000/
```

## BUILD
```sh
$ npm run build
```