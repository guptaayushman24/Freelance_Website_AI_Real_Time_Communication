/*
  Warnings:

  - Added the required column `jobtitle` to the `ApplyJob` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ApplyJob" ADD COLUMN     "jobtitle" TEXT NOT NULL;
