FROM node:20.8.1-alpine3.18

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /server

COPY package*.json ./

RUN npm install -g nodemon && \
    npm install -g sequelize-cli

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "/bin/sh", "-c" ]

CMD [ "npm run db-migrate && npm run start" ]