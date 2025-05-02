-- CreateTable
CREATE TABLE "CompletedPoject" (
    "completedprojectid" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "project_title" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,

    CONSTRAINT "CompletedPoject_pkey" PRIMARY KEY ("completedprojectid")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompletedPoject_client_id_userid_project_title_key" ON "CompletedPoject"("client_id", "userid", "project_title");

-- AddForeignKey
ALTER TABLE "CompletedPoject" ADD CONSTRAINT "CompletedPoject_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "ClientSchema"("client_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedPoject" ADD CONSTRAINT "CompletedPoject_userid_fkey" FOREIGN KEY ("userid") REFERENCES "UserSchema"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
