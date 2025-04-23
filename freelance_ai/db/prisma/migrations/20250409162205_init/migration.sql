-- AddForeignKey
ALTER TABLE "ApplyJob" ADD CONSTRAINT "profile_userid_fkey" FOREIGN KEY ("userid") REFERENCES "ProfileSchema"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;
