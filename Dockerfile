FROM node 
# ??? нужно ли написать норм версию ноды (ведь я прил буду писать на определенной)

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ENV PORT 3000

EXPOSE $PORT

CMD [ "node", "app.js" ]