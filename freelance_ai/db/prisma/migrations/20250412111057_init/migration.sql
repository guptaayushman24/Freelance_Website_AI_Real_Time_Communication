/*
  Warnings:

  - A unique constraint covering the columns `[jobid,userid,jobtitle]` on the table `ApplyJob` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ApplyJob_jobid_userid_key";

-- CreateIndex
CREATE UNIQUE INDEX "ApplyJob_jobid_userid_jobtitle_key" ON "ApplyJob"("jobid", "userid", "jobtitle");
