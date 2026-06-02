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

## Production deployment with Podman

The image builds the app at build time and serves it via the Nuxt server on port 3000.

### Build the image

```bash
podman build -t didanum-myple .
```

### Run as a systemd service (Quadlet)

A Quadlet unit file is provided in [deploy/didanum-myple.container](deploy/didanum-myple.container). It exposes the app on `127.0.0.1:8082`.

```bash
cp deploy/didanum-myple.container ~/.config/containers/systemd/
systemctl --user daemon-reload
systemctl --user start didanum-myple
```

### Update

```bash
git pull
podman build -t didanum-myple .
systemctl --user restart didanum-myple
```
