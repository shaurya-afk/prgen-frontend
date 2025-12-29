# prgen-site

Minimal landing page for **prgen**.

This site exists only to explain what `prgen` is and provide a clean, copy-pasteable install command.  
It is not a product surface. The CLI is the product.

---

## What this is

- Single-page application (SPA)
- Static content only
- No backend
- No auth
- No analytics
- No demos

Purpose:
- Clear positioning
- Installation instructions
- Example output

---

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (UI primitives only)

---

## Development

```bash
npm install
npm run dev
```

---

## Build

```bash
npm run build
```

Static output only.

---

## Related

* CLI repo: [https://github.com/shaurya-afk/prgen](https://github.com/shaurya-afk/prgen)
* Install:

  ```bash
  pipx install git+https://github.com/shaurya-afk/prgen.git@v0.1.1
  ```

---

## Notes

This repository should remain simple.
Any feature that adds complexity without improving clarity does not belong here.

```