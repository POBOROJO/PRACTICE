# Prisma PostgreSQL Practice Project

This is a practice project demonstrating the integration of Prisma ORM with PostgreSQL database.

## Description

This project serves as a learning exercise for working with:

- Prisma ORM
- PostgreSQL Database
- Node.js/TypeScript
- Database Migrations and Schema Management

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL installed and running
- npm or yarn package manager

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd prisma-postgresql
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up your environment variables:

```bash
cp .env.example .env
```

Then edit `.env` with your PostgreSQL database connection string.

4. Run Prisma migrations:

```bash
npx prisma migrate dev
```

## Features

- Database schema management with Prisma
- CRUD operations examples
- Relational data modeling
- Type-safe database queries

## Project Structure

```
prisma-postgresql/
├── prisma/
│   └── schema.prisma    # Database schema
├── src/
│   └── ...             # Source files
├── .env                # Environment variables
└── README.md          # This file
```

## Available Scripts

- `npm run dev`: Start development server
- `npx prisma studio`: Open Prisma Studio to manage data
- `npx prisma migrate dev`: Run database migrations

## Learning Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)

## License

This project is open-source and available under the MIT License.
