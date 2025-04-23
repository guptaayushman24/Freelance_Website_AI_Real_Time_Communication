/*
  Warnings:

  - Changed the type of `client_id` on the `AcceptedProject` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "AcceptedProject" DROP COLUMN "client_id",
ADD COLUMN     "client_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AcceptedProject_client_id_project_title_key" ON "AcceptedProject"("client_id", "project_title");
