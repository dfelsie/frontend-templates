FROM node:17-slim

WORKDIR /app

COPY package.json .

COPY package-lock.json .

COPY tsconfig.json .

COPY src ./src

COPY public ./public

RUN npm ci

RUN npm run build

COPY .next ./.next

COPY next-env.d.ts next-env.d.ts

#COPY .next .next

EXPOSE 3018

ENTRYPOINT ["npm","run","dev"]
