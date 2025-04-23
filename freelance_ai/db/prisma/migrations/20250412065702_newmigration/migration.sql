-- CreateTable
CREATE TABLE "AcceptedProject" (
    "aaplyproject" SERIAL NOT NULL,
    "client_name" TEXT NOT NULL,
    "client_email" TEXT NOT NULL,
    "project_title" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,

    CONSTRAINT "AcceptedProject_pkey" PRIMARY KEY ("aaplyproject")
);
