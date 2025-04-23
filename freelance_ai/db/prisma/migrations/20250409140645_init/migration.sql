/*
  Warnings:

  - You are about to drop the column `profileid` on the `ApplyJob` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ApplyJob" DROP CONSTRAINT "ApplyJob_profileid_fkey";

-- AlterTable
ALTER TABLE "ApplyJob" DROP COLUMN "profileid";
