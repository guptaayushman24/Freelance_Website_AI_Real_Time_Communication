/*
  Warnings:

  - Added the required column `profileid` to the `ApplyJob` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ApplyJob" ADD COLUMN     "profileid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ApplyJob" ADD CONSTRAINT "ApplyJob_profileid_fkey" FOREIGN KEY ("profileid") REFERENCES "ProfileSchema"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;
