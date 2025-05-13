/*
  Warnings:

  - You are about to drop the column `clientid` on the `FaceAuthentication` table. All the data in the column will be lost.
  - Made the column `userid` on table `FaceAuthentication` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "FaceAuthentication" DROP CONSTRAINT "FaceAuthentication_clientid_fkey";

-- DropForeignKey
ALTER TABLE "FaceAuthentication" DROP CONSTRAINT "FaceAuthentication_userid_fkey";

-- AlterTable
ALTER TABLE "FaceAuthentication" DROP COLUMN "clientid",
ALTER COLUMN "userid" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "FaceAuthentication" ADD CONSTRAINT "FaceAuthentication_userid_fkey" FOREIGN KEY ("userid") REFERENCES "UserSchema"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
