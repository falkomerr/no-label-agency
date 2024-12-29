FROM node:22 AS build-stage
WORKDIR /opt/app

COPY . .

RUN npm i 
RUN npm dedupe

RUN npm run build

FROM node:22-slim AS run-stage
WORKDIR /opt/app

COPY --from=build-stage /opt/app/.next ./.next
COPY --from=build-stage /opt/app/public ./public
COPY --from=build-stage /opt/app/node_modules ./node_modules

ENV NODE_ENV production

ENTRYPOINT ["./node_modules/.bin/next", "start", "--port", "4500"]