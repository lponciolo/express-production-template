# Express Production Template 
####  A template to speed up new backend setup

# Features
- Only element routes to understand the core.
- Logging with [Winston](https://github.com/winstonjs/winston) & [Morgan](https://github.com/expressjs/morgan).
- Basic Security Features  with  [Helmet](https://helmetjs.github.io/).
- Cors implementation with [Cors](https://github.com/expressjs/cors).
- 404 Middleware.
- Error Middleware.
- Auth Middleware with [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken).
- Test Units with Jest  [Jest](https://github.com/facebook/jest).
-  Validation with [Joi](https://github.com/sideway/joi).
- Route Controller Service Structure
- Done in Typescript
- ESLint and Prettier for style
- Basic Docs with Swagger [Swagger](https://github.com/swagger-api).

## Installation

clone the repository and then:

    npm run install 
    npm run dev
    
   
   ## Folder Structure
```
.
├──src
├	├── controllers							# controllers files
├	├── loaders								# core files
├	├── middlewares							# 404, auth & error middlewares
├	├── routes								# routes files
├	├── services							# services files
├	├── validators							# validators of each route
├	config.ts								# config file used in testing
├	index.ts								# index file
├── __tests__                				# unit tests
├── test_utils                  			# utils used in unit tests
├── logs                					
├── build                       			
├── .env									
├── .eslintrc.js							
├── .gitignore							
├── swaggerOptions.json						# swagger configuration
├── tsconfig.json
├── jest.config.js							# testing configuration
├── types.d.ts								# custom types
└── package.json
```

## Install

create a .env file in ROOT with following info

    PORT=8081
    USER_NAME=username
    USER_PASS=password
    TOKEN_SECRET=YOURTOKENSECRET__BASICALLYALONGSTRING
    API_URL=https://mercadopagobackend.herokuapp.com/
    TEST_ACCESS_TOKEN=validaccesstokenforlogintestunit

then run the following commands

    npm run install

## Start

     npm run dev

## Build

     npm run build
     npm run start

## Test

     npm run test

## Docs

you will find all routes information in localhost:8081/docs

|Route|Description|
|-- |--|
|  /| Welcome Route, return "Hello World" message |
|  /login| Login route, must provide username & password in request|
|  /admin| Only Admin user can access this route, return message "Hello Admin"  |


## Improvements

- new endpoint Controller, Service, Route & Test files creation with npm command
- Encryption

## Found a bug? Missing a specific feature?

Feel free to  **file a new issue**  with a respective title and description on the the  [lponciolo/express-production-template](https://github.com/lponciolo/express-production-template)
