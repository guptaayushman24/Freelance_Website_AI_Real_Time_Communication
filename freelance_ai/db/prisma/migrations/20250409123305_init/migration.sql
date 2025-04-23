-- AddForeignKey
ALTER TABLE "ApplyJob" ADD CONSTRAINT "ApplyJob_userid_fkey" FOREIGN KEY ("userid") REFERENCES "UserSchema"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplyJob" ADD CONSTRAINT "ApplyJob_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "ClientSchema"("client_id") ON DELETE RESTRICT ON UPDATE CASCADE;
