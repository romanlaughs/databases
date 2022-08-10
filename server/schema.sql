CREATE DATABASE chat;

USE chat;


-- CREATE TABLE messages (
--   id integer(5), text VARCHAR(280), userId integer(3), room VARCHAR(20)
--   /* Describe your table here.*/
-- );

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `messageID` INTEGER(2) NULL AUTO_INCREMENT DEFAULT NULL,
  `text` VARCHAR(20) NULL DEFAULT NULL,
  `userID` INTEGER(2) NULL DEFAULT NULL,
  `roomID` INTEGER(4) NULL DEFAULT NULL,
  UNIQUE KEY (`messageID`)
);

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `userID` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(20) NULL DEFAULT NULL,
  UNIQUE KEY (`userID`)
);

-- ---
-- Table 'room'
--
-- ---

DROP TABLE IF EXISTS `room`;

CREATE TABLE `room` (
  `roomID` INTEGER(3) NULL AUTO_INCREMENT DEFAULT NULL,
  `roomName` VARCHAR(20) NULL DEFAULT NULL,
  UNIQUE KEY (`roomID`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (userID) REFERENCES `users` (`userID`);
ALTER TABLE `messages` ADD FOREIGN KEY (roomID) REFERENCES `room` (`roomID`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `room` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`messageID`,`text`,`userID`,`roomID`) VALUES
-- ('','','','');
-- INSERT INTO `users` (`userID`,`username`) VALUES
-- ('','');
-- INSERT INTO `room` (`roomID`,`roomName`) VALUES
-- ('','');


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

