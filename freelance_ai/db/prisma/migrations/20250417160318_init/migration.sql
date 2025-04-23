/*
  Warnings:

  - Added the required column `userid` to the `AcceptedProject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AcceptedProject" ADD COLUMN     "userid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "AcceptedProject" ADD CONSTRAINT "AcceptedProject_userid_fkey" FOREIGN KEY ("userid") REFERENCES "UserSchema"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
