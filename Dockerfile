FROM node:latest

EXPOSE 3001

RUN mkdir -p /site
WORKDIR /site

COPY . /site

RUN npm install

CMD npm run dev
