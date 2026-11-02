# syntax=docker/dockerfile:1

# Node 22 matches `@types/node` ^22 and the repo's local toolchain.
FROM node:22-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat \
	&& corepack enable \
	&& corepack prepare yarn@1.22.22 --activate

# Playwright is only used for tests; skip browser downloads in the image build.
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
ENV HUSKY=0

COPY package.json yarn.lock .npmrc ./

# Skip lifecycle scripts so `prepare` (svelte-kit sync) can run after sources are copied.
RUN yarn install --frozen-lockfile --ignore-scripts --network-timeout 600000

COPY . .

ENV ADAPTER=node
ENV NODE_ENV=production

RUN yarn svelte-kit sync && yarn build:docs

# ---
# Runtime: adapter-node output (`build/`) served by Node as a non-root user.
# The docs app is not a fully prerendered static site (prerender is commented
# out; server redirects and dynamic [slug] routes remain), so nginx is not used.
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

RUN apk add --no-cache libc6-compat \
	&& chown node:node /app

COPY --from=builder --chown=node:node /app/build ./build

USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
	CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/docs/pages/introduction').then((r)=>process.exit(r.status<400?0:1)).catch(()=>process.exit(1))"

CMD ["node", "build"]
