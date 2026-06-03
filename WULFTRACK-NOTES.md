# Wulftrack — branding & AGPL notes

Wulftrack is a white-labeled, self-hosted deployment of **Plane** (the open-source
project-management tool by Plane Software, Inc.), operated at
`wulftrack.silverwulf.com` (and the legacy `plane.silverwulf.com`).

## License & lineage (AGPL-3.0-only)

Plane is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0-only)**.
This repository is a modified version of Plane. Per the license we retain, unchanged:

- `LICENSE.txt` — the full AGPL-3.0 text.
- `COPYRIGHT.txt` and every per-file `Copyright (c) 2023-present Plane Software, Inc.
  and contributors` header.

Only the **trademark / brand identity** ("Plane" name, logos, marketing copy) has been
replaced with "Wulftrack" in the user interface. Trademarks are not covered by copyright;
the underlying copyright notices and license stay intact. The "Plane" name does **not**
appear in this notice for branding reasons — it appears here, in the source, because the
license requires the lineage to be documented.

### AGPL §13 (network use) — Corresponding Source

The deployed instance runs **modified** `web`, `admin`, and `space` frontends built from
this tree. The complete Corresponding Source for the running version is published at:

> https://github.com/SilverWulf212/wulftrack

This must stay (a) **complete** — the source behind the link is the exact tree the running
binaries are built from — and (b) **prominent** — the offer is not faked, hidden, or
removed. The backend (`api`, `live`, `proxy`, `db`, infra) runs **unmodified** upstream
`makeplane/*:stable` images; their Corresponding Source is published by upstream and is
also mirrored in this tree.

## What was changed (branding only)

- UI brand text "Plane" → "Wulftrack" across `apps/*` and `packages/i18n` string values
  (copyright headers explicitly restored — never altered).
- Logos / favicons / app icons / loading-spinner marks → Wulftrack mark
  (source SVGs in `branding/wulftrack/`).
- Page titles, PWA manifests, `og:`/`twitter:` metadata → Wulftrack.
- Removed the "Star us on GitHub" button (top nav + invitation empty-state).
- Repointed in-app "report an issue" links to this repo's issue tracker.
- `metadata.ts` site URLs → `wulftrack.silverwulf.com`.

### Build-fix

`apps/{web,admin,space}/Dockerfile.*`: added `$PNPM_HOME/bin` to `PATH` so the pinned
pnpm@10.x global `turbo` install resolves. Functional fix, no branding impact.

## Known residual upstream references (functional, not branding)

These are links to Plane-operated services that have no self-hosted equivalent; they remain
functional and are intentionally left in place:

- `docs.plane.so`, `forum.plane.so`, `*.plane.so` changelog/legal/sales links in Help menus
  and footers.
- `support@plane.so` / `sales@plane.so` mailto links.
- `apps/api/plane/static/logos/Logo.png` — backend email logo (the `api` image is
  **not** rebuilt; runs unmodified upstream).

## Deployment

- Compose: `/home/silverwulf/plane/docker-compose.prod.yml` — `web`/`admin`/`space` use
  locally-built `wulftrack-{web,admin,space}:local`; rest are upstream `makeplane/*:stable`.
- Build: `DOCKER_BUILDKIT=1 docker build -f apps/web/Dockerfile.web -t wulftrack-web:local .`
  (same for admin/space).
- Routing: Traefik dynamic config `/root/docker/traefik/dynamic/plane.yml` —
  `Host(plane.silverwulf.com) || Host(wulftrack.silverwulf.com)` → `plane-proxy:80`,
  `lecf` cert resolver.
