-- CreateTable
CREATE TABLE "FaceAuthentication" (
    "faceauthentication" SERIAL NOT NULL,
    "densevector" INTEGER[],

    CONSTRAINT "FaceAuthentication_pkey" PRIMARY KEY ("faceauthentication")
);
