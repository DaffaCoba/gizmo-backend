/*
  Warnings:

  - You are about to drop the column `categoriesSlug` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `Products_categoriesSlug_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `categoriesSlug`,
    ADD COLUMN `categorySlug` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_categorySlug_fkey` FOREIGN KEY (`categorySlug`) REFERENCES `Categories`(`slug`) ON DELETE SET NULL ON UPDATE CASCADE;
