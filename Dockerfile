# Stage 1
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn run build


# Stage 2
FROM --platform=linux/amd64 nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
