DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

--/*  Execute this file from the command line by typing:
 --*    mysql -u root < server/schema.sql
 --*  to create the database and the tables.*/


CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INTEGER(2) NOT NULL AUTO_INCREMENT,
  text VARCHAR(280) NOT NULL,
  userID INTEGER(2) NOT NULL,
  roomname VARCHAR(20),
  PRIMARY KEY (id)
);

