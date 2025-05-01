/*
  Warnings:

  - A unique constraint covering the columns `[email,role]` on the table `WalletSchema` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `WalletSchema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WalletSchema" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "WalletSchema_email_role_key" ON "WalletSchema"("email", "role");
