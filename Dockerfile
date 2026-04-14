# Multi-stage build: cached dependency layer speeds up Railway rebuilds vs single Railpack step.
# https://nextjs.org/docs/app/building-your-application/deploying#docker-image

FROM node:22-bookworm-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
# Railway/build hosts often set `production`; Next still needs devDependencies to compile.
ENV NPM_CONFIG_PRODUCTION=false
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# prebuild-clean removes `.next`; on Docker overlay/BuildKit that hits EBUSY on `.next/cache`.
# Image builds are always from a clean tree — skip (see scripts/prebuild-clean.cjs).
ENV SKIP_PREBUILD_CLEAN=1
# Stable workspace root inside the image (see `next.config.ts` — avoids broken paths on Railway).
ENV NEXT_OUTPUT_FILE_TRACING_ROOT=/app
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN groupadd --system --gid 1001 nodejs && useradd --system --uid 1001 --gid nodejs nextjs

# Standalone output, static assets, and public directory.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./.next/standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/standalone/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./.next/standalone/public

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", ".next/standalone/server.js"]
