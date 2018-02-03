FROM node:8.9.4

MAINTAINER Chandresh Rajkumar Manonmani <chandresh.rm@gmail.com> <cs1193@gmail.com> (http://chandreshrm.name)

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

# RUN npm run test

EXPOSE 38141

CMD ["npm", "start"]
