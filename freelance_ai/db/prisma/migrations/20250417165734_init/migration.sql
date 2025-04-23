/*
  Warnings:

  - You are about to drop the column `client_email` on the `AcceptedProject` table. All the data in the column will be lost.
  - You are about to drop the column `client_name` on the `AcceptedProject` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AcceptedProject" DROP CONSTRAINT "AcceptedProject_userid_fkey";

-- AlterTable
ALTER TABLE "AcceptedProject" DROP COLUMN "client_email",
DROP COLUMN "client_name";

-- AddForeignKey
ALTER TABLE "AcceptedProject" ADD CONSTRAINT "AcceptedProject_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "ClientSchema"("client_id") ON DELETE RESTRICT ON UPDATE CASCADE;
