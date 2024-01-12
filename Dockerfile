# App
FROM node:lts as builder
WORKDIR /app
COPY . /app

RUN yarn install --legacy-peer-deps && yarn build


# # App
FROM nginx:alpine

COPY --from=builder /app /app

RUN rm -rf /usr/share/nginx/html \
 && ln -s /app /usr/share/nginx/html