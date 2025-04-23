-- CreateTable
CREATE TABLE "ProfileSchema" (
    "profile_id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "ProfileSchema_pkey" PRIMARY KEY ("profile_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProfileSchema_userid_key" ON "ProfileSchema"("userid");

-- AddForeignKey
ALTER TABLE "ProfileSchema" ADD CONSTRAINT "ProfileSchema_userid_fkey" FOREIGN KEY ("userid") REFERENCES "UserSchema"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
