# Imad Hassan Portfolio

React + Vite + Tailwind portfolio.

## Run locally
    pnpm install
    pnpm dev

For the optional FastAPI backend, install `server/requirements.txt` in your
active Python environment and run `pnpm dev:all`. It uses SQLite under
`server/`; do not use an ephemeral disk for production data.

## Build
    pnpm build      # output in dist/

## Push to GitHub
    git init
    git add .
    git commit -m "Initial portfolio"
    git branch -M main
    git remote add origin https://github.com/imadhassan1235/<repo-name>.git
    git push -u origin main

## Deploy on Vercel
Import the repository. Use `pnpm build` as the build command and `dist` as the
output directory. `vercel.json` enables direct links and page refreshes for all
client-side routes. Vercel deploys `api/contact.ts` as a serverless function.
Vercel's production domain is used automatically for canonical and social
preview URLs when system environment variables are enabled; `VITE_SITE_URL`
can override it if needed.
Configure these server-side environment variables in the Vercel project:

- `RESEND_API_KEY` — secret API key from Resend; never expose it with a `VITE_` prefix.
- `CONTACT_FROM_EMAIL` — sender address on a domain verified with Resend.
- `CONTACT_TO_EMAIL` — `imadhassan668@gmail.com` (or the address that should receive inquiries).

The contact form returns an error until these variables are configured and
Resend accepts the message. A custom sending domain is needed to verify the
sender address.

Netlify static hosting does not run this Vercel function; configure a Netlify
Function or use Vercel for the included contact delivery.

The optional FastAPI server is separate. For a full-stack deployment on a
Python-capable host, install `server/requirements.txt` and use `pnpm start` on a
host with a persistent disk for SQLite (`APP_DB_PATH` can select its location).
The server binds to `0.0.0.0` and uses the platform's `PORT`.

No demo login is created by default. To seed one intentionally, set both
`DEMO_EMAIL` and `DEMO_PASSWORD` in the server environment before startup.
