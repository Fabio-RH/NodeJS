-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema dbselecao
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbselecao
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbselecao` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `dbselecao` ;

-- -----------------------------------------------------
-- Table `dbselecao`.`bdcopa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbselecao`.`bdcopa` (
  `idselecao` INT(11) NOT NULL AUTO_INCREMENT,
  `pais_selecao` VARCHAR(50) NOT NULL,
  `grupo_selecao` VARCHAR(1) NOT NULL,
  PRIMARY KEY (`idselecao`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
