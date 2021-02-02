FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Install nest cli
RUN npm i -g @nestjs/cli

RUN npm install
# RUN npm install --only=production

# Copy app source
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]