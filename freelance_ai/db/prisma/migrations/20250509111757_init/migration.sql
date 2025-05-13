/*
  Warnings:

  - You are about to drop the `FaceAuthentication` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FaceAuthentication" DROP CONSTRAINT "FaceAuthentication_userid_fkey";

-- DropTable
DROP TABLE "FaceAuthentication";
