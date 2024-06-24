
FROM node:19


COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5009
CMD [ "node", "bin/www" ]
