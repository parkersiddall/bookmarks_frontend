# pull node, expose port 3000, set working directory
FROM node:14
EXPOSE 3000
WORKDIR /usr/src/app

# copy project files, install dependencies, build app
COPY . .
RUN npm install
RUN npm run build

# to serve static files
RUN npm install -g serve
CMD serve -s -l 3000 build