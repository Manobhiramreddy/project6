FROM node:18-alpine
WORKDIR /app
COPY package.json ./
COPY server.js ./
EXPOSE 2020
CMD ["node", "server.js"]
