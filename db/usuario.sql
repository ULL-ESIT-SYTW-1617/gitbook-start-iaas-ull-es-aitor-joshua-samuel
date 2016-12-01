-- MySQL Script generated by MySQL Workbench
-- jue 24 nov 2016 20:58:35 WET
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sytw` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `sytw` ;

-- -----------------------------------------------------
-- Table `mydb`.`USUARIOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sytw`.`login` (
  `name` VARCHAR(45) NULL COMMENT '',
  `login` VARCHAR(45) NOT NULL COMMENT '',
  `id` INT NOT NULL COMMENT '',
  `password` VARCHAR(100) NULL COMMENT '',
  PRIMARY KEY (`id`, `login`)  COMMENT '',
  UNIQUE INDEX `id_UNIQUE` (`id` ASC)  COMMENT '',
  UNIQUE INDEX `login_UNIQUE` (`login` ASC)  COMMENT '')
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
