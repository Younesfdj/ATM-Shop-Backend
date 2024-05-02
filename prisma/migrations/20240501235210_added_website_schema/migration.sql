-- CreateTable
CREATE TABLE `Product` (
    `ProductId` INTEGER NOT NULL AUTO_INCREMENT,
    `ProductSKU` VARCHAR(191) NOT NULL,
    `ProductName` VARCHAR(191) NOT NULL,
    `ProductPrice` DOUBLE NOT NULL,
    `ProductCategoryId` INTEGER NOT NULL,
    `ProductDesc` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ProductId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `CategoryId` INTEGER NOT NULL AUTO_INCREMENT,
    `CategoryName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`CategoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `OrderId` INTEGER NOT NULL AUTO_INCREMENT,
    `OrderUserId` INTEGER NOT NULL,
    `OrderAmount` DOUBLE NOT NULL,
    `OrderPhone` VARCHAR(191) NOT NULL,
    `OrderEmail` VARCHAR(191) NOT NULL,
    `OrderDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `OrderCity` VARCHAR(191) NOT NULL,
    `OrderAdress` VARCHAR(191) NOT NULL,
    `OrderStatus` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`OrderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderDetail` (
    `DetailId` INTEGER NOT NULL AUTO_INCREMENT,
    `DetailOrderId` INTEGER NOT NULL,
    `DetailProductId` INTEGER NOT NULL,
    `DetailQuantity` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`DetailId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `UserId` INTEGER NOT NULL AUTO_INCREMENT,
    `UserName` VARCHAR(191) NOT NULL,
    `UserEmail` VARCHAR(191) NOT NULL,
    `UserPassword` VARCHAR(191) NOT NULL,
    `UserPhone` VARCHAR(191) NOT NULL,
    `UserRole` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`UserId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_ProductCategoryId_fkey` FOREIGN KEY (`ProductCategoryId`) REFERENCES `Category`(`CategoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_OrderUserId_fkey` FOREIGN KEY (`OrderUserId`) REFERENCES `User`(`UserId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderDetail` ADD CONSTRAINT `OrderDetail_DetailOrderId_fkey` FOREIGN KEY (`DetailOrderId`) REFERENCES `Order`(`OrderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderDetail` ADD CONSTRAINT `OrderDetail_DetailProductId_fkey` FOREIGN KEY (`DetailProductId`) REFERENCES `Product`(`ProductId`) ON DELETE RESTRICT ON UPDATE CASCADE;
