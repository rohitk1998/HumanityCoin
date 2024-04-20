FROM node:14.0.0 AS builder

WORKDIR /home/node
COPY --chown=node:node . .
RUN npm i -g npm@6.14.4

USER node

RUN rm -rf package-lock.json

RUN npm install
RUN npm rebuild node-sass

RUN npm run build
RUN npm run prebuild

FROM nginx:mainline-alpine

COPY --from=builder /home/node/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
