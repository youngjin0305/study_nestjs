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

# Prisma와 PostgreSQL 설정
$ npm i @prisma/client prisma
$ npm i -D @types/node
$ npx prisma init
```

prisma/schema.prisma설정
.env에 PostgreSQL 연결정보 추가
migration 실행 및 Prisma Client 생성
```bash
$ npx prisma migrate dev --name init
```

```bash
# JWT와 Passport를 통한 인증 구축
$ npm install @nestjs/passport passport passport-jwt @nestjs/jwt bcrypt
$ npm install -D @types/passport-jwt @types/bcrypt
```
auth 모듈 설정 및 구현 (jwt.strategy.ts)

```bash
# Winston을 사용한 로깅 설정
$ npm install nest-winston winston winston-daily-rotate-file
```
app.module.ts에 Winston 설정 추가

```bash
# Grafana/Prometheus를 활용한 모니터링 설정
$ npm install @willsoto/nestjs-prometheus prom-client
```
app.module.ts에 설정 추가
Grafana 및 Prometheus는 별도의 Docker 컨테이너로 실행하여 앱의 메트릭을 수집하도록 설정
