FROM node:16

COPY . .

EXPOSE 8080

RUN npm install

CMD node index.js
