FROM node:14.17.0-alpine as dependencies
WORKDIR /cd-landing-frontend-stg
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:14.17.0-alpine as builder
WORKDIR /cd-landing-frontend-stg
COPY . .
COPY --from=dependencies /cd-landing-frontend-stg/node_modules ./node_modules
RUN yarn build

FROM node:14.17.0-alpine as runner
WORKDIR /cd-landing-frontend-stg
# ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.

ARG PORT
ENV PORT=$PORT

ARG NEXT_PUBLIC_BASE_URL=https://code-landing-2022.herokuapp.com
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL

COPY --from=builder /cd-landing-frontend-stg/next.config.js ./
COPY --from=builder /cd-landing-frontend-stg/public ./public
COPY --from=builder /cd-landing-frontend-stg/.next ./.next
COPY --from=builder /cd-landing-frontend-stg/node_modules ./node_modules
COPY --from=builder /cd-landing-frontend-stg/package.json ./package.json

EXPOSE $PORT
CMD ["yarn", "start"]
