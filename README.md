# Machine Web Monorepo

A pnpm monorepo containing Machine's web applications and shared design system.

## 📁 Project Structure

```
machine-web/
├── packages/
│   └── design/           # Shared design system & UI components
└── apps/
    ├── landing/          # Main marketing website
    └── portal/           # Customer portal (coming soon)
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ and pnpm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:machine-computers/web.git
   cd web
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

## 🚀 Development

### Start all apps in development mode
```bash
pnpm dev
```

### Start specific apps
```bash
# Landing website (http://localhost:8080)
pnpm dev:landing

# Portal app (http://localhost:8081)
pnpm dev:portal
```

### Build all packages
```bash
pnpm build
```

### Build specific packages
```bash
# Build design system
pnpm build:design

# Build landing app
pnpm build:landing

# Build portal app
pnpm build:portal
```

## 📦 Packages

### `@machine/design`
Shared design system containing:
- 40+ UI components built with Radix UI and Tailwind CSS
- Design tokens and theme configuration
- Reusable Header and Footer components
- TypeScript support with proper exports

### `@machine/landing`
Main marketing website featuring:
- Landing page with hero, features, pricing sections
- Multiple informational pages (security, compliance, etc.)
- Uses the shared design system
- Built with React, Vite, and React Router

### `@machine/portal`
Customer portal application:
- Currently shows a "coming soon" page
- Uses the shared design system
- Ready for future portal functionality

## 🛠️ Development Workflow

1. **Design System Changes**: Make changes in `packages/design/src/`
2. **Landing App Changes**: Make changes in `apps/landing/src/`
3. **Portal App Changes**: Make changes in `apps/portal/src/`

The design system is automatically rebuilt when you make changes, and apps will hot-reload with the updates.

## 🎨 Design System Usage

Import components from the design system in your apps:

```tsx
import { Button, Card, Header, Footer } from '@machine/design'

// Use in your components
<Header currentPath={location.pathname} LinkComponent={Link} />
<Card>
  <Button>Click me</Button>
</Card>
<Footer />
```
