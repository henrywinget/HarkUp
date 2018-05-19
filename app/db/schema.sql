DROP DATABASE IF EXISTS HarkUp;

CREATE DATABASE HarkUp;

USE HarkUp;

CREATE TABLE users (
user_id INT NOT NULL AUTO_INCREMENT,
first_name varchar (32) NOT NULL,
last_name varchar (32) NOT NULL,
user_name varchar (20) NOT NULL,
user_email varchar (55) NOT NULL,
user_password varchar (32) NOT NULL,
primary key (user_id)
);

CREATE TABLE details (
user_id INT NOT NULL,
url_history TEXT,
voice_preference INT NOT NULL,
reason varchar(55) NOT NULL,
time_added DATETIME,
url_queue TEXT
);