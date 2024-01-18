# App
FROM node:lts as builder
WORKDIR /app
COPY . /app

RUN npm install --legacy-peer-deps
RUN npm run build


# # App
FROM nginx:alpine

COPY --from=builder /app/dist /app

RUN mv /app /var/www/html