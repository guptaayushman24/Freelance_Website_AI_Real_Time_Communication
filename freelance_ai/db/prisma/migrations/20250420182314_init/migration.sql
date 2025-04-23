/*
  Warnings:

  - You are about to drop the column `acceptedstatus` on the `AcceptedProject` table. All the data in the column will be lost.
  - You are about to drop the column `acceptedstatus` on the `ApplyJob` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AcceptedProject" DROP COLUMN "acceptedstatus";

-- AlterTable
ALTER TABLE "ApplyJob" DROP COLUMN "acceptedstatus";
