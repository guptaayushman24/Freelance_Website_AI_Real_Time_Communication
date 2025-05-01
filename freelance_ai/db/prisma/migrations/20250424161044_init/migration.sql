-- CreateTable
CREATE TABLE "BankSchema" (
    "accountid" SERIAL NOT NULL,
    "accountnumber" TEXT NOT NULL,
    "amount" TEXT NOT NULL DEFAULT '0',

    CONSTRAINT "BankSchema_pkey" PRIMARY KEY ("accountid")
);

-- CreateTable
CREATE TABLE "WalletSchema" (
    "walletid" SERIAL NOT NULL,
    "role" TEXT NOT NULL,
    "amount" TEXT NOT NULL DEFAULT '0',
    "uniqueid" TEXT NOT NULL,

    CONSTRAINT "WalletSchema_pkey" PRIMARY KEY ("walletid")
);

-- CreateIndex
CREATE UNIQUE INDEX "BankSchema_accountnumber_key" ON "BankSchema"("accountnumber");

-- CreateIndex
CREATE UNIQUE INDEX "WalletSchema_uniqueid_key" ON "WalletSchema"("uniqueid");
