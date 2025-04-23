/*
  Warnings:

  - The primary key for the `ApplyJob` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ApplyJob" DROP CONSTRAINT "ApplyJob_pkey",
ADD CONSTRAINT "ApplyJob_pkey" PRIMARY KEY ("clientid", "userid");
