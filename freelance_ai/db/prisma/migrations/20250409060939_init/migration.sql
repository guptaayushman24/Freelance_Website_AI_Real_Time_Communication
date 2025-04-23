-- CreateTable
CREATE TABLE "ApplyJob" (
    "applyjobid" SERIAL NOT NULL,
    "clientid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "ApplyJob_pkey" PRIMARY KEY ("applyjobid")
);
