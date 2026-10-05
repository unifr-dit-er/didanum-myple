# Didanum Myple

## Overview

Didanum Myple is a web application built with Nuxt 3.

It lets you:
- browse educational resources from a Directus API;
- navigate content in French, German and Italian (i18n);
- display rich content with Tailwind CSS + DaisyUI.

Main configuration is handled in `nuxt.config.ts`.

## Development

### Prerequisites

- Node.js 22 (recommended)
- npm

### Setup

```bash
npm install
npm run dev
```

App: `http://localhost:3000`

### Update

```bash
git pull
npm install
```

## Production

The app is deployed on the VM with Podman + Quadlet (documentation in French):

- [Initial deployment](docs/podman-deploy.md)
- [Update](docs/podman-update.md)
