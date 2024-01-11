/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `UserPassword` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_passwordId_fkey`;

-- AlterTable
ALTER TABLE `User` MODIFY `isAdmin` BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX `UserPassword_userId_key` ON `UserPassword`(`userId`);

-- AddForeignKey
ALTER TABLE `UserPassword` ADD CONSTRAINT `UserPassword_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
