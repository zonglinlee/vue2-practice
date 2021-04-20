FROM node:lts as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm config set registry https://registry.npm.taobao.org --global
RUN npm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
RUN npm install --prefer-offline --no-audit
COPY ./ .
RUN npm run build

FROM nginx:stable as production-stage
EXPOSE 8080
RUN mkdir /app
COPY --from=build-stage /app/dist/ /app
COPY nginx.conf /etc/nginx/nginx.conf
# docker build -t nginx-test .
#  docker run --name nginx-test -p 8080:8080 -d nginx-test
