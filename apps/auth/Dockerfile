
# Use Node Alpine as the base image for development
FROM node:20.16.0-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# COPY package.json package-lock.json ./
# RUN npm install -g && npm install

COPY . .

RUN npm run build auth

# Create a production image
FROM node:20.16.0-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/package.json ./package.json

CMD [ "node", "dist/apps/auth/main" ]