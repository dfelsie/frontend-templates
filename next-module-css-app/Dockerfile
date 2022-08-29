# I just deploy on Vercel, but this could be used
# Issues with ssr/managing which backend ssr uses
# It can't use localhost
# It needs the docker address, unlike rest of frontend

FROM node:17-slim

WORKDIR /app

COPY package.json .

COPY package-lock.json .

COPY tsconfig.json .

COPY src ./src

COPY public ./public

COPY .next ./.next

COPY next-env.d.ts next-env.d.ts

RUN npm ci

RUN npm run build

#COPY .next .next

EXPOSE 3018

ENTRYPOINT ["npm","run","dev"]
