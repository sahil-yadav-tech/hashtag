FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9987

CMD ["npm", "start"]


# FROM node:22-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . . 

# EXPOSE 4000

# CMD ["npm", "start"]
