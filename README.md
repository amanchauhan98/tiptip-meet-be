# Backend - NestJS + Prisma

The backend for the WebRTC Video Conference application. Handles signaling (Socket.io) and room management.

## Deployment (Railway)

This backend is configured for deployment on Railway with PostgreSQL.

### Key Changes
- **Database**: Uses PostgreSQL in production (`prisma/schema.prisma`).
- **Port**: Listens on `process.env.PORT` or `3001`.

### Start Command (Railway)
Standard NestJS start command:
```bash
npm run start:prod
```

## Local Development (SQLite)

For local development, we use SQLite (`prisma/schema.sqlite.prisma`) to avoid needing a local Postgres instance.

### Setup
1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Generate Prisma Client for SQLite:
    ```bash
    npm run db:local:generate
    ```
3.  Push schema to local SQLite database (`dev.db`):
    ```bash
    npm run db:local:push
    ```

### Running the App
```bash
npm run start:dev
```
The app will use the generated Prisma Client, which is configured for SQLite after running `db:local:generate`.

### Inspecting the Database
To view the local SQLite data:
```bash
npm run db:local:studio
```

## Structure
- `prisma/schema.prisma`: **Production** schema (PostgreSQL) - Used by Railway.
- `prisma/schema.sqlite.prisma`: **Local** schema (SQLite) - Used for development.
