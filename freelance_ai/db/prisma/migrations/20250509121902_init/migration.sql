-- CreateTable
CREATE TABLE "FaceAuthentication" (
    "faceauthentication" SERIAL NOT NULL,
    "imagestring" TEXT NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "FaceAuthentication_pkey" PRIMARY KEY ("faceauthentication")
);

-- AddForeignKey
ALTER TABLE "FaceAuthentication" ADD CONSTRAINT "FaceAuthentication_userid_fkey" FOREIGN KEY ("userid") REFERENCES "UserSchema"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
