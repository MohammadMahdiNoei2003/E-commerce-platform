-- CreateTable
CREATE TABLE "LoginTimestamp" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoginTimestamp_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LoginTimestamp" ADD CONSTRAINT "LoginTimestamp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
