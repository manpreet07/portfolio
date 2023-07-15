# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app directory into the container
COPY . .

# Build the React app
RUN npm run build

# Set the environment variable for the production build
ENV NODE_ENV=production

# Expose the port that the React app will run on (default is 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]