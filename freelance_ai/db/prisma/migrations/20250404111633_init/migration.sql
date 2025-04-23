/*
  Warnings:

  - Added the required column `About` to the `ProfileSchema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProfileSchema" ADD COLUMN     "About" TEXT NOT NULL,
ADD COLUMN     "ProjectLink" TEXT[];
