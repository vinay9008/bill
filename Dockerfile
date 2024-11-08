# Dockerfile
# Step 1: Use Node image to build the app
FROM node:14 AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Use nginx to serve the app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
