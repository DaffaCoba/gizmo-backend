/*
  Warnings:

  - You are about to drop the column `categoriesId` on the `products` table. All the data in the column will be lost.
  - Added the required column `image` to the `Categories` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `Products_categoriesId_fkey`;

-- AlterTable
ALTER TABLE `categories` ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `categoriesId`,
    ADD COLUMN `categoriesSlug` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_categoriesSlug_fkey` FOREIGN KEY (`categoriesSlug`) REFERENCES `Categories`(`slug`) ON DELETE SET NULL ON UPDATE CASCADE;
