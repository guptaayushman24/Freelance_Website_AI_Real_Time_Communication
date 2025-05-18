import { PrismaClient } from "../db/generated/client";
import path from "path";

// Only set the query engine path in production
if (process.env.NODE_ENV === "production") {
  process.env.PRISMA_QUERY_ENGINE_LIBRARY = path.join(
    __dirname,
    "../prisma-engines/libquery_engine-rhel-openssl-3.0.x.so.node"
  );
}

// Prevent multiple Prisma clients in development (for hot reloading)
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
