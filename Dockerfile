FROM node:12-alpine
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY server.js /usr/src/app
EXPOSE 8080
CMD [ "npm", "start" ]