# Build stage
FROM node:14 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN apt-get update && apt-get install -y libcrypt1


# Final stage
FROM node:alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
CMD ["npm", "start"]

