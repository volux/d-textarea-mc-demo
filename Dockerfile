FROM node

WORKDIR /app
ADD . /app
RUN cd /app && npm install

EXPOSE 3000

CMD ["node", "server.js"]