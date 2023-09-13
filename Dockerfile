# Dockerfile for React client

# Build react client
FROM node:18.17-alpine

# Create directory within container
RUN mkdir -p /usr/

# Set working directory inside container
WORKDIR /usr/

# Copy local files to container's working directory
COPY . .

###  Install dependencies
RUN npm install --silent

# Expose ports 3000 and 8080 on the container
EXPOSE 3000
EXPOSE 8080

# Specify default command to run when the container starts
CMD ["npm", "run", "dev"]