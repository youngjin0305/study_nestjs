## Description
nestjs를 공부하기 위한 프로젝트

## 기술 스택
- NestJS
- PostgreSQL
- Prisma
- JWT + Passport
- Winston
- Prometheus + Grafana
- Docker

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 프로젝트 설정 과정
```bash
# nestJS cli 설치
$ npm i -g @nestjs/cli

# 프로젝트 생성
$ nest new ./

# pipe에 필요한 모듈 설치
$ npm install --save class-validator class-transformer

# typeORM 설치
$ npm install --save @nestjs/typeorm typeorm pg
$ npm install --save-dev @types/node

# JWT와 Passport를 통한 인증 구축
$ npm install @nestjs/passport passport passport-jwt @nestjs/jwt bcrypt
$ npm install -D @types/passport-jwt @types/bcrypt
```
auth 모듈 설정 및 구현 (jwt.strategy.ts)

```bash
# Winston을 사용한 로깅 설정
$ npm install winston winston-logstash-transport
```
app.module.ts에 Winston 설정 추가

