FROM node:17-slim

WORKDIR /app

COPY package.json .

COPY package-lock.json .

COPY tsconfig.json .

COPY src ./src

COPY public ./public

RUN npm install

EXPOSE 3018

ENTRYPOINT ["npm","run","dev"]
