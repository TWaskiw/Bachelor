/*
  Warnings:

  - You are about to drop the column `taste` on the `ProductVariant` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `ProductVariant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ProductVariant` DROP COLUMN `taste`,
    DROP COLUMN `weight`,
    ADD COLUMN `name` VARCHAR(191) NULL;
