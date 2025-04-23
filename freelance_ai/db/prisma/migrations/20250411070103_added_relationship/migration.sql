-- AlterTable
ALTER TABLE "ApplyJob" ADD COLUMN     "budget" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "timeline" TEXT NOT NULL DEFAULT '0';
