FROM node:20-alpine AS deps

WORKDIR /app

# Cài dependencies bằng pnpm (dựa trên pnpm-lock.yaml)
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile


FROM node:20-alpine AS builder

WORKDIR /app

# Copy source và node_modules đã cài từ stage deps
COPY . .
COPY --from=deps /app/node_modules ./node_modules

# Build Next.js
RUN corepack enable && pnpm run build


FROM node:20-alpine AS runner

WORKDIR /app

# Tạo user non-root cho an toàn
RUN addgroup -g 1001 nodejs && adduser -S nextjs -u 1001

# Copy các file cần thiết cho runtime
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

# Chạy Next.js ở chế độ production (mặc định NODE_ENV trong Next tự xử lý)
CMD ["node", "node_modules/next/dist/bin/next", "start", "-H", "0.0.0.0", "-p", "3000"]

