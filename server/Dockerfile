FROM node:latest AS build
WORKDIR /task
COPY package.*json .
RUN npm install 
COPY . . 
RUN npm run build 
#stage 2
FROM node:current-alpine3.21 AS Prod
WORKDIR /app
COPY --from=build /task/dist /app/dist
COPY --from=build /task/node_modules /app/node_modules
COPY --from=build /task/.env /app/.env
EXPOSE 3000
CMD ["node","dist/src/index.js"]