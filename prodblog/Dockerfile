FROM node:latest AS build

WORKDIR /app

RUN mkdir public/ && mkdir src/

COPY package.json .

COPY public/ public/

COPY src/ src/

RUN npm i package.json && npm run build 
#creates a build directory in the current stage /w node img

FROM nginx:latest 
#creates a fresh image layer 

LABEL developer=ElliottLamarArnold

COPY --from=buildStep /app/build/ /usr/share/nginx/html

EXPOSE 80

# docker build .  -t si3mshady/blogsite-fe:1 