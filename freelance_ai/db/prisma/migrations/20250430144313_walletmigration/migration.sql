/*
  Warnings:

  - A unique constraint covering the columns `[accountnumber]` on the table `WalletSchema` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WalletSchema_accountnumber_key" ON "WalletSchema"("accountnumber");
