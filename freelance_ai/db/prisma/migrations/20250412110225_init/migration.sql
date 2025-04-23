/*
  Warnings:

  - A unique constraint covering the columns `[client_id,project_title]` on the table `AcceptedProject` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `client_id` to the `AcceptedProject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AcceptedProject" ADD COLUMN     "client_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AcceptedProject_client_id_project_title_key" ON "AcceptedProject"("client_id", "project_title");
