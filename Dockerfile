# 1. Build stage
FROM node:22.14.0 AS builder

# Set working directory
WORKDIR /app

# Only copy package files first (better caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Fix esbuild issues (important for Vite)
RUN npm rebuild esbuild

# Now copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# 2. Production stage
FROM node:22.14.0 AS runner

# Install 'serve' to serve the static build
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy only the build output from builder stage
COPY --from=builder /app/dist ./build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]
