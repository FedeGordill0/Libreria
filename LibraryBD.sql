create database library
USE library;

CREATE TABLE books(
	id int auto_increment not null,
	titulo varchar(100) not null,
    autor varchar(100) not null,
    edicion int,
	PRIMARY KEY (id)
);
