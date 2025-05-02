/*
  Warnings:

  - You are about to drop the column `userid` on the `CompletedPoject` table. All the data in the column will be lost.
  - Added the required column `useremail` to the `CompletedPoject` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CompletedPoject" DROP CONSTRAINT "CompletedPoject_client_id_fkey";

-- DropForeignKey
ALTER TABLE "CompletedPoject" DROP CONSTRAINT "CompletedPoject_userid_fkey";

-- DropIndex
DROP INDEX "CompletedPoject_client_id_userid_project_title_key";

-- AlterTable
ALTER TABLE "CompletedPoject" DROP COLUMN "userid",
ADD COLUMN     "useremail" TEXT NOT NULL;
