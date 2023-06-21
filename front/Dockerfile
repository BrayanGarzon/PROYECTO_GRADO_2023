# Base image
FROM node:18.14.1-alpine as build

RUN mkdir /app
WORKDIR /app

RUN npm install -g @angular/cli@13

COPY . .

COPY package.json package-lock.json ./
RUN npm ci

RUN npm install

COPY . .

RUN npm run build --prod
# CMD ["ng", "serve", "--host", "0.0.0.0"]


# nginx serve
FROM nginxinc/nginx-unprivileged 

USER root

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/front/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]