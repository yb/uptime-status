# ---- Dependencies ----
FROM node:lts-alpine AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install 

# ---- Build ----
FROM dependencies AS build
WORKDIR /app
COPY . /app
RUN npm run build 

FROM nginx:1.16-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
