/*
  Warnings:

  - You are about to drop the column `densevector` on the `FaceAuthentication` table. All the data in the column will be lost.
  - Added the required column `imagestring` to the `FaceAuthentication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FaceAuthentication" DROP COLUMN "densevector",
ADD COLUMN     "imagestring" TEXT NOT NULL;
