FROM node:latest

ENV NODE_ENV production

# Create app directory and copy source to it
RUN mkdir /app
WORKDIR /app
COPY /src /app/src

# Copy and install dependencies
COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]