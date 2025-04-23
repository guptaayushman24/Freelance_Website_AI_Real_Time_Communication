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

-- CreateIndex
CREATE UNIQUE INDEX "UserSchema_Email_key" ON "UserSchema"("Email");
