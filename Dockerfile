
FROM node:16.3.0-alpine3.13

RUN npm install -g nodemon

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

user node

COPY --chown=node:node package*.json .

RUN npm install

COPY --chown=node:node src/* .

EXPOSE 8800

CMD ["nodemon","app.mjs"]
