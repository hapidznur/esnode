FROM node:12

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
