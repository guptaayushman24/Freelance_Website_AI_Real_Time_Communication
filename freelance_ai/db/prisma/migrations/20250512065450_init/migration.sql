/*
  Warnings:

  - A unique constraint covering the columns `[userid]` on the table `FaceAuthentication` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FaceAuthentication_userid_key" ON "FaceAuthentication"("userid");
