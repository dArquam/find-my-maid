## to create entities or DB connection
npm install --save @nestjs/typeorm typeorm

## to create validation
npm install --save class-validator class-transformer

## to set dynamically configuration file
npm i --save @nestjs/config  

## to connect mongoDB
npm install mongodb

## cross-env lets you set environment variables in your package.json scripts in a cross-platform way
npm install --save-dev cross-env

{
  "scripts": {
    "start:dev": "cross-env NODE_ENV=development nest start --watch",
    "start:prod": "cross-env NODE_ENV=production nest start",
    "start:test": "cross-env NODE_ENV=test nest start"
  }
}


