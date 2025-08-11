# Truck Dispatcher Portal — Starter (Monorepo)

**One-click**: push this repo to GitHub → open **Code → Codespaces → Create codespace**.  
Everything runs in the browser; no installs on your office PC.

## Quick start

1. Create a new GitHub repo and upload this starter (or push with `git`).  
2. Open with **GitHub Codespaces** (default machine is fine).  
3. In the Codespace terminal, run:
   ```bash
   docker compose up -d           # start Postgres + Redis
   pnpm i                         # install deps for all workspaces
   pnpm dev:web                   # start Next.js (http://localhost:3000)
   # In a new terminal:
   pnpm dev:api                   # start NestJS API (http://localhost:4000)
   # In a new terminal:
   pnpm dev:worker                # start worker
   # (optional) In a new terminal for mobile dev:
   pnpm dev:mobile                # Expo
   ```

### Default env (create `.env` in repo root or inside each app as needed)

```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/dispatcher
REDIS_URL=redis://localhost:6379
API_URL=http://localhost:4000
WEB_URL=http://localhost:3000
MAPBOX_TOKEN=YOUR_MAPBOX_TOKEN_HERE
```

## Apps

- `apps/web` — Next.js + Tailwind (dispatcher UI, map placeholder).  
- `apps/api` — NestJS (REST + WebSocket placeholder).  
- `apps/worker` — Node worker with BullMQ-like structure (placeholder).  
- `apps/mobile` — Expo (driver app skeleton with GPS toggle placeholder).

## Notes

- This is a minimal scaffold to keep install small. Expand deps as you go.  
- For maps, add your Mapbox token or replace with MapLibre later.  
- For auth, wire up Auth0/Clerk in `apps/web` and `apps/api` when ready.
