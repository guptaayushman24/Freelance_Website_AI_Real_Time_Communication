-- AddForeignKey
ALTER TABLE "AcceptedProject" ADD CONSTRAINT "AcceptedProject_userid_fkey" FOREIGN KEY ("userid") REFERENCES "UserSchema"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
