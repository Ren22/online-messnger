FROM node:16.13.1-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "build-prod"]
CMD ["node", "app.ts"]
