# Portfolio (Next.js + Tailwind)

This project is a Tailwind + Next.js App Router portfolio scaffold with a dark, modern theme.

## Run locally

If PowerShell blocks npm scripts on Windows, run via Node:

```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run dev
```

Or allow scripts and run normally:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
npm install
npm run dev
```

Open http://localhost:3000

## Build (production)

```powershell
npm run build
npm start
```

## Structure
- `app/` - Next.js App Router pages and layout
- `components/` - UI components
- `public/images` - placeholder project images
- `styles/globals.css` - global styles and Tailwind directives

## Notes
- Theme toggle persists preference to `localStorage`.
- Images under `public/images` are placeholders. Replace with your project thumbnails.
