# Step 1: Build the Angular application
FROM node:latest AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Step 2: Serve the application
FROM nginx:alpine

# Copy built files from the previous stage
COPY --from=build /app/dist/mongo-db-log-analyser/browser /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
