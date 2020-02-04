FROM node:latest

ENV HOME=/home/app

COPY package.json $HOME/

WORKDIR $HOME/
RUN yarn install

COPY . $HOME/

CMD ["yarn", "start"]