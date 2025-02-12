/*
  Warnings:

  - You are about to drop the `_AddressToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_AddressToUser" DROP CONSTRAINT "_AddressToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_AddressToUser" DROP CONSTRAINT "_AddressToUser_B_fkey";

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_AddressToUser";

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
