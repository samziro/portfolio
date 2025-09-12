# Use Node.js image
FROM node:18-alpine

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set the working directory
WORKDIR /app

# Copy dependencies and install
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Change ownership of the app directory
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Expose the port
EXPOSE 3004

# Start the app
CMD ["npm", "run", "dev"]
