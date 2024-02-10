FROM node:18-alpine
WORKDIR /
COPY . .
RUN npm install --production
CMD ["node", "src/index.js"]
EXPOSE 3001