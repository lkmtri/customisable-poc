FROM node:latest

EXPOSE 3001

RUN mkdir -p /frontend
WORKDIR /frontend

COPY . /frontend

RUN npm install

CMD npm run dev
