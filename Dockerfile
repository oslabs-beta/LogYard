# Dockerfile for React client

# Build react client
FROM node:18.17-alpine

# Set working directory inside container
WORKDIR /usr/app

# Copy package.json and package-lock.json to the container
COPY package*.json /usr/app/

###  Install dependencies
RUN npm install --silent

# Copy local files to container's working directory
COPY . /usr/app/

# Expose ports 3000 and 8080 on the container
EXPOSE 3000
EXPOSE 8080

# Specify default command to run when the container starts
CMD ["npm", "run", "dev"]