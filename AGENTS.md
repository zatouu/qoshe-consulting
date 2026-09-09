# Agent Notes — QOSHE Consulting

## Build & Development

- Build command (Windows / PowerShell execution policy blocks `npm` directly):
  ```
  cmd /c "npm run build"
  ```
- The project is configured with `output: "export"` and `distDir: "dist"` in `next.config.mjs`.
- Production static files are emitted to `dist/` and can be served with any static server, e.g.:
  ```
  npx serve dist -p 3001
  ```
- Dev server:
  ```
  cmd /c "npx next dev -p 3001"
  ```

## Project Structure

- Next.js 14 App Router.
- Components are in `components/`.
- Shared data is in `data/`.
- Module detail pages are under `app/modules/[id]/` and use `generateStaticParams`.

## Notes

- `npm run lint` prompts for ESLint configuration; no `.eslintrc` is currently present.
