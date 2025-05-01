/*
  Warnings:

  - Added the required column `accountnumber` to the `WalletSchema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WalletSchema" ADD COLUMN     "accountnumber" TEXT NOT NULL;
