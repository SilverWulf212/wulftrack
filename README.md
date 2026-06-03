<div align="center">
  <img src="branding/wulftrack/badge.png" alt="Wulftrack" width="96" height="96" />
  <h1>Wulftrack</h1>
  <p><strong>Simple, extensible, open-source project management.</strong></p>
</div>

Wulftrack is a self-hosted tool for tracking issues, cycles, and product roadmaps —
work items, boards, and documents in one place.

Live instance: **https://wulftrack.silverwulf.com**

## License & lineage

Wulftrack is a modified, white-labeled distribution of
[Plane](https://github.com/makeplane/plane) by Plane Software, Inc., and is licensed
under the **GNU Affero General Public License v3.0** (`AGPL-3.0-only`).

In accordance with the license, the original `LICENSE.txt`, `COPYRIGHT.txt`, and every
per-file `Copyright (c) 2023-present Plane Software, Inc. and contributors` notice are
retained unchanged. Only the trademark and brand identity have been changed.

This repository is the **complete Corresponding Source** (AGPL-3.0 §13) for the running
modified frontends served at the URL above. See [`WULFTRACK-NOTES.md`](WULFTRACK-NOTES.md)
for the full attribution, the list of branding changes, and deployment details.

## Deploy

```bash
docker build -f apps/web/Dockerfile.web     -t wulftrack-web:local   .
docker build -f apps/admin/Dockerfile.admin -t wulftrack-admin:local .
docker build -f apps/space/Dockerfile.space -t wulftrack-space:local .
docker compose -f docker-compose.prod.yml up -d
```

The `api`, `live`, and `proxy` services run unmodified upstream `makeplane/*` images.
