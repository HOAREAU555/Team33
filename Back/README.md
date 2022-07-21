# Voltron API

## How to run Voltron API ?

To start API in development mode :

```bash
yarn run dev
```

To start API in production mode :

```bash
yarn run start
```

In production mode, API is monitoring with PM2 and can be load balanced if multiple instances are start.

## Entrypoints documentation :

If you want access to API documentation, you've to run only in development mode and access to this URI :

```bash
<url>/v1/docs
```

## Code style :

You should verify your code before commit, to do that you can use this commands:

```bash
yarn run lint:fix
```
```bash
yarn run prettier:fix
```

These commands fix a major party of linting errors.
