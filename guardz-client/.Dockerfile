FROM node:18-alpine

WORKDIR /react-docker-client/

COPY public/ /react-docker-client/public
COPY src/ /react-docker-client/src
COPY package.json /react-docker-client/

RUN npm install

CMD ["npm", "start"]
