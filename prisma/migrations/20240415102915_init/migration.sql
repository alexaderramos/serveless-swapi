-- CreateTable
CREATE TABLE `Personaje` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `altura` INTEGER NOT NULL,
    `masa` VARCHAR(191) NOT NULL,
    `color_pelo` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `peliculas` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
