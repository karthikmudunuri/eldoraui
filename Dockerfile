# Use the official Node.js 22 image as base
FROM node:22-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/www/package.json ./apps/www/

# Install dependencies (skip scripts to avoid postinstall issues)
FROM base AS deps
RUN pnpm install --frozen-lockfile --ignore-scripts

# Build the application
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/www/node_modules ./apps/www/node_modules
COPY . .

# Run postinstall scripts now that source files are available
# This will be fast since dependencies are already installed
RUN pnpm install --frozen-lockfile

# Build registry first, then the Next.js app
RUN pnpm --filter=www build:registry
RUN pnpm --filter=www build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from standalone build
COPY --from=builder --chown=nextjs:nodejs /app/apps/www/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/www/.next/static ./apps/www/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/www/public ./apps/www/public

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["node", "apps/www/server.js"]

