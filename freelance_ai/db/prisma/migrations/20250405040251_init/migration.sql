-- CreateTable
CREATE TABLE "JobSchema" (
    "job_id" SERIAL NOT NULL,
    "clientid" INTEGER NOT NULL,
    "Job_titile" TEXT NOT NULL,
    "Job_description" TEXT NOT NULL,
    "Budget" TEXT NOT NULL,
    "Timeline" TEXT NOT NULL,

    CONSTRAINT "JobSchema_pkey" PRIMARY KEY ("job_id")
);

-- AddForeignKey
ALTER TABLE "JobSchema" ADD CONSTRAINT "JobSchema_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "ClientSchema"("client_id") ON DELETE RESTRICT ON UPDATE CASCADE;
