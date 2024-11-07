FROM node:20.16.0-alpine AS development

FROM node:20.16.0-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build
 
FROM node:20.16.0-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --only=production

COPY . .


COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/package.json ./package.json

CMD ["node", "dist/apps/orders/main"]



# FROM node:20-alpine As development

# WORKDIR /usr/src/app

# # COPY package.json package-lock.json ./

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# FROM node:20-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/apps/orders/main"]