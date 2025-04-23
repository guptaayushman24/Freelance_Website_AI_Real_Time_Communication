/*
  Warnings:

  - A unique constraint covering the columns `[client_id,userid,project_title]` on the table `AcceptedProject` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "AcceptedProject_client_id_project_title_key";

-- CreateIndex
CREATE UNIQUE INDEX "AcceptedProject_client_id_userid_project_title_key" ON "AcceptedProject"("client_id", "userid", "project_title");
