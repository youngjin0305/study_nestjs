# Builder 스테이지: 빌드용
FROM node:24-alpine AS builder

WORKDIR /app

# 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 소스 코드 복사 및 빌드
COPY . .
RUN npm run build

# Production 스테이지: 운영용
FROM node:24-alpine AS production
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

# 빌드 결과물 복사
COPY --from=builder /app/dist ./dist

# 포트 설정
EXPOSE 3000

# 실행 명령어
CMD ["node", "dist/main.js"]