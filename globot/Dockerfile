# Use stable LTS Node
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files first (for caching)
COPY package.json package-lock.json* ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy rest of the source code
COPY . .

# Expose the same port your app uses
EXPOSE 4000

# Start the server
CMD ["node", "server.js"]
