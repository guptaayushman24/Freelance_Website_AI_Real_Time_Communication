-- CreateTable
CREATE TABLE "ClientSchema" (
    "client_id" SERIAL NOT NULL,
    "client_name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Organization" TEXT NOT NULL DEFAULT 'Personal',

    CONSTRAINT "ClientSchema_pkey" PRIMARY KEY ("client_id")
);
