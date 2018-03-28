FROM node:latest

EXPOSE 3001

ARG node_env
ENV NODE_ENV $node_env
ENV APP_ENV $node_env

RUN mkdir -p /site
WORKDIR /site

COPY . /site

RUN npm install

RUN echo ${APP_ENV}

CMD echo ${APP_ENV} && if [ ${APP_ENV} = docker ] ; then \
  npm run build && \
  npm run start; \
  else \
  node scripts/index.js & npm run dev; \
  fi