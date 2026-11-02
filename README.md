# Svelte library

Everything you need to build a Svelte library, powered by [`sv`](https://npmjs.com/package/sv).

Read more about creating a library [in the docs](https://svelte.dev/docs/kit/packaging).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.12.5 create --template library --types ts --add prettier vitest="usages:component,unit" playwright tailwindcss="plugins:typography,forms" sveltekit-adapter="adapter:static" mdsvex storybook mcp="ide:cursor,claude-code+setup:remote" eslint --install yarn s-ui
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```sh
npm pack
```

To create a production version of your showcase app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Deploying the docs with Docker

On a Linux server with Docker installed, the documentation site can be built and served with:

```sh
docker compose up -d --build
```

That command builds the SvelteKit docs (`yarn build:docs`, using `@sveltejs/adapter-node`) and starts a container that listens on port **3000** inside the container. The service uses `restart: unless-stopped` so it comes back after a reboot.

### Changing the port

The host port is `${DOCS_PORT:-3000}`. To publish a different port:

```sh
# one-off
DOCS_PORT=8080 docker compose up -d --build

# or persist it
cp .env.example .env
# then set DOCS_PORT in .env
docker compose up -d --build
```

Do not commit `.env` files that contain secrets. `DOCS_PORT` is the only compose setting needed for this stack.

### Updating to a new version

```sh
git pull
docker compose up -d --build
```

The rebuild uses the current tree (including `yarn.lock`). After the new container is healthy, old images can be pruned with `docker image prune`.

The default `yarn build` / `npm run build` path is unchanged: it still uses `adapter-auto` and still packages the library. Docker is the only place that sets `ADAPTER=node`.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```sh
npm publish
```
