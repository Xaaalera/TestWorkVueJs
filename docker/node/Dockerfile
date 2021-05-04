FROM node:15.2.1-alpine3.10


RUN apk add autoconf \
            python \
            automake \
            gcc \
            alpine-sdk \
            build-base


RUN npm install --global cross-env
RUN npm install --global @vue/cli