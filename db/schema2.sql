DROP DATABASE IF EXISTS HarkUp;

CREATE DATABASE HarkUp;

USE HarkUp;

CREATE TABLE user_info (
user_id INT NOT NULL AUTO_INCREMENT,
user_name varchar (32) NOT NULL,
photo_url varchar (255) NOT NULL,
user_email varchar (55) NOT NULL,
phone_number INT,
PRIMARY KEY (user_id)
);

CREATE TABLE user_preferences (
user_name VARCHAR(32) NOT NULL,
voice_preference INT NOT NULL,
signup_reason VARCHAR(55) NOT NULL,
signup_date DATETIME
);

CREATE TABLE user_articles (
user_name VARCHAR(32),
website_url VARCHAR(255) NOT NULL DEFAULT "",
date_added DATETIME NOT NULL
);