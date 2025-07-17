FROM node

# Set working directory
WORKDIR /myapp

# Copy only package files first to install dependencies (better for cache)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Install Nest CLI (optional if using globally)
RUN npm install -g @nestjs/cli
# Expose app port
# EXPOSE 3000

# Default command (can be overridden by docker-compose)
CMD ["npm", "run", "start:prod"]