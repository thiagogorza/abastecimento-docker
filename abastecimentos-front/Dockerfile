FROM node:lts-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install zone.js@0.12 typescript@5.7.3 --save-dev --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/abastecimentos-front/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

