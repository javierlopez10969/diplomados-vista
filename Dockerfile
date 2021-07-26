# pull the base image
FROM node:alpine

RUN npm install -g serve

# set the working direction
WORKDIR /app

# install app dependencies
COPY package.json ./

RUN npm install

# add app
COPY . ./

# Crear la build
RUN npm run build

CMD ["http-server" , "dist"]
#CMD ["serve", "-s" , "build"]

