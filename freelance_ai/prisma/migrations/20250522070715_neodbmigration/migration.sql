/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `WalletSchema` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WalletSchema_email_key" ON "WalletSchema"("email");
