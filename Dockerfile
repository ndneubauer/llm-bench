# Dockerfile

FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first for better Docker layer caching
COPY package*.json ./
RUN npm ci

# Copy the app source and build it
COPY . .
RUN npm run build


FROM nginx:1.27-alpine AS runtime

# Replace the default Nginx site with our SPA config
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built Vite assets into Nginx web root
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]