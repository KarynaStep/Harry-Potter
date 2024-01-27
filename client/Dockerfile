FROM node:20.8.1-alpine3.18

ARG NODE_ENV="development"
ENV NODE_ENV=${NODE_ENV}

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start"]