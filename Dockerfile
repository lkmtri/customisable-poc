FROM node:latest

EXPOSE 3001

ARG node_env
ENV NODE_ENV $node_env
ENV APP_ENV $node_env

RUN mkdir -p /site
WORKDIR /site

COPY . /site

RUN npm install

CMD if [${APP_ENV} = docker] ; then \
  npm run build && \
  npm run start; \
  else \
  npm run dev; \
  fi