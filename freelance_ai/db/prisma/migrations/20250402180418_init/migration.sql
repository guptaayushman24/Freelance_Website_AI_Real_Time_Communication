/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `ClientSchema` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ClientSchema" ALTER COLUMN "Organization" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ClientSchema_Email_key" ON "ClientSchema"("Email");
