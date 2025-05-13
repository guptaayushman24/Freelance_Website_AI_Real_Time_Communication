-- AlterTable
ALTER TABLE "FaceAuthentication" ADD COLUMN     "clientid" INTEGER,
ADD COLUMN     "userid" INTEGER;

-- AddForeignKey
ALTER TABLE "FaceAuthentication" ADD CONSTRAINT "FaceAuthentication_userid_fkey" FOREIGN KEY ("userid") REFERENCES "UserSchema"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FaceAuthentication" ADD CONSTRAINT "FaceAuthentication_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "ClientSchema"("client_id") ON DELETE SET NULL ON UPDATE CASCADE;
