-- CreateTable
CREATE TABLE "UserSchema" (
    "user_id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Experience" INTEGER NOT NULL,
    "Rating" INTEGER NOT NULL,
    "Skills" TEXT[],

    CONSTRAINT "UserSchema_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "ClientSchema" (
    "client_id" SERIAL NOT NULL,
    "client_name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Organization" TEXT DEFAULT 'Personal',

    CONSTRAINT "ClientSchema_pkey" PRIMARY KEY ("client_id")
);

-- CreateTable
CREATE TABLE "ProfileSchema" (
    "profile_id" SERIAL NOT NULL,
    "About" TEXT NOT NULL,
    "ProjectLink" TEXT[],
    "userid" INTEGER NOT NULL,

    CONSTRAINT "ProfileSchema_pkey" PRIMARY KEY ("profile_id")
);

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

-- CreateTable
CREATE TABLE "ApplyJob" (
    "applyjobid" SERIAL NOT NULL,
    "clientid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "jobtitle" TEXT NOT NULL,
    "budget" TEXT NOT NULL DEFAULT '0',
    "timeline" TEXT NOT NULL DEFAULT '0',
    "jobid" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ApplyJob_pkey" PRIMARY KEY ("applyjobid")
);

-- CreateTable
CREATE TABLE "AcceptedProject" (
    "aaplyproject" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "project_title" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,

    CONSTRAINT "AcceptedProject_pkey" PRIMARY KEY ("aaplyproject")
);

-- CreateTable
CREATE TABLE "BankSchema" (
    "accountid" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "accountnumber" TEXT NOT NULL,
    "amount" TEXT NOT NULL DEFAULT '0',

    CONSTRAINT "BankSchema_pkey" PRIMARY KEY ("accountid")
);

-- CreateTable
CREATE TABLE "WalletSchema" (
    "walletid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "accountnumber" TEXT NOT NULL,
    "amount" TEXT NOT NULL DEFAULT '0',
    "uniqueid" TEXT NOT NULL,

    CONSTRAINT "WalletSchema_pkey" PRIMARY KEY ("walletid")
);

-- CreateTable
CREATE TABLE "CompletedPoject" (
    "completedprojectid" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "useremail" TEXT NOT NULL,
    "project_title" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,

    CONSTRAINT "CompletedPoject_pkey" PRIMARY KEY ("completedprojectid")
);

-- CreateTable
CREATE TABLE "FaceAuthentication" (
    "faceauthentication" SERIAL NOT NULL,
    "imagestring" TEXT NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "FaceAuthentication_pkey" PRIMARY KEY ("faceauthentication")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSchema_Email_key" ON "UserSchema"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "ClientSchema_Email_key" ON "ClientSchema"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileSchema_userid_key" ON "ProfileSchema"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "ApplyJob_clientid_userid_jobtitle_key" ON "ApplyJob"("clientid", "userid", "jobtitle");

-- CreateIndex
CREATE UNIQUE INDEX "AcceptedProject_client_id_userid_project_title_key" ON "AcceptedProject"("client_id", "userid", "project_title");

-- CreateIndex
CREATE UNIQUE INDEX "BankSchema_accountnumber_key" ON "BankSchema"("accountnumber");

-- CreateIndex
CREATE UNIQUE INDEX "WalletSchema_email_key" ON "WalletSchema"("email");

-- CreateIndex
CREATE UNIQUE INDEX "WalletSchema_accountnumber_key" ON "WalletSchema"("accountnumber");

-- CreateIndex
CREATE UNIQUE INDEX "WalletSchema_uniqueid_key" ON "WalletSchema"("uniqueid");

-- CreateIndex
CREATE UNIQUE INDEX "WalletSchema_email_role_key" ON "WalletSchema"("email", "role");

-- CreateIndex
CREATE UNIQUE INDEX "FaceAuthentication_userid_key" ON "FaceAuthentication"("userid");

-- AddForeignKey
ALTER TABLE "ProfileSchema" ADD CONSTRAINT "ProfileSchema_userid_fkey" FOREIGN KEY ("userid") REFERENCES "UserSchema"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobSchema" ADD CONSTRAINT "JobSchema_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "ClientSchema"("client_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplyJob" ADD CONSTRAINT "ApplyJob_userid_fkey" FOREIGN KEY ("userid") REFERENCES "UserSchema"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplyJob" ADD CONSTRAINT "ApplyJob_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "ClientSchema"("client_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplyJob" ADD CONSTRAINT "profile_userid_fkey" FOREIGN KEY ("userid") REFERENCES "ProfileSchema"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplyJob" ADD CONSTRAINT "ApplyJob_jobid_fkey" FOREIGN KEY ("jobid") REFERENCES "JobSchema"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcceptedProject" ADD CONSTRAINT "AcceptedProject_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "ClientSchema"("client_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcceptedProject" ADD CONSTRAINT "AcceptedProject_userid_fkey" FOREIGN KEY ("userid") REFERENCES "UserSchema"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FaceAuthentication" ADD CONSTRAINT "FaceAuthentication_userid_fkey" FOREIGN KEY ("userid") REFERENCES "UserSchema"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
