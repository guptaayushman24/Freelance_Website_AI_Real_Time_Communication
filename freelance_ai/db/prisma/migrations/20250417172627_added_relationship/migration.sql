/*
  Warnings:

  - A unique constraint covering the columns `[clientid,userid,jobtitle]` on the table `ApplyJob` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ApplyJob_jobid_userid_jobtitle_key";

-- CreateIndex
CREATE UNIQUE INDEX "ApplyJob_clientid_userid_jobtitle_key" ON "ApplyJob"("clientid", "userid", "jobtitle");
