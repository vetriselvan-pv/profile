---
name: create_base_workspace
description: Scaffolds a base full-stack workspace using Vite, React, Tailwind CSS, Express, and TypeScript, similar to the standard template.
---

# Create Base Workspace Skill

This skill sets up a full-stack web application workspace with the following tech stack:
- **Frontend:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Backend:** Express 5, TypeScript, tsx for development
- **Environment:** dotenv, zod for validation

## Instructions for Antigravity

When a user requests to create a base workspace, follow these steps to scaffold the project:

### 1. Initialize `package.json`
Create a `package.json` with the following dependencies:
```json
{
  "name": "base-workspace",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "tsx server/index.ts"
  },
  "type": "commonjs",
  "dependencies": {
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "@types/express": "^5.0.6",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.4",
    "@vitejs/plugin-react": "^6.1.0",
    "tsx": "^4.23.12",
    "typescript": "^7.0.2",
    "vite": "^8.2.2"
  }
}
```
Run `npm install` after creating the `package.json`.

### 2. Configure Vite
Create `vite.config.ts`:
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

### 3. Setup Express Server
Create `server/index.ts`:
```typescript
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { env } from "./config/env";
import app from "./app";

async function startServer() {
  if (env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(Number(env.PORT), "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${env.PORT}`);
  });
}

startServer();
```
(Note: You will also need to create placeholder files for `server/app.ts` and `server/config/env.ts` as needed by the user's specific requirements, but initialize them with basic boilerplate.)

### 4. Setup TypeScript
Create a basic `tsconfig.json` suited for Vite and React, along with a `server/tsconfig.json` if needed.

### 5. Frontend Entry Point
Create `index.html` at the root, and `src/main.tsx` along with `src/App.tsx` importing Tailwind CSS if requested.

**Note:** Always remind the user to check `.env` configurations and ensure ports (like 3000) are correctly mapped for the Express server.
