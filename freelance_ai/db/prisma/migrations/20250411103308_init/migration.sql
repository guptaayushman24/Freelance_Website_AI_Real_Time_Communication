/*
  Warnings:

  - The primary key for the `ApplyJob` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[jobid,userid]` on the table `ApplyJob` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `jobid` to the `ApplyJob` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ApplyJob" DROP CONSTRAINT "ApplyJob_pkey",
ADD COLUMN     "jobid" INTEGER NOT NULL,
ADD CONSTRAINT "ApplyJob_pkey" PRIMARY KEY ("applyjobid");

-- CreateIndex
CREATE UNIQUE INDEX "ApplyJob_jobid_userid_key" ON "ApplyJob"("jobid", "userid");

-- AddForeignKey
ALTER TABLE "ApplyJob" ADD CONSTRAINT "ApplyJob_jobid_fkey" FOREIGN KEY ("jobid") REFERENCES "JobSchema"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;
