DROP DATABASE IF EXISTS HarkUp;

CREATE DATABASE HarkUp;

USE HarkUp;

CREATE TABLE user_info (
    user_id INT NOT NULL AUTO_INCREMENT,
    full_name varchar (60) NOT NULL,
    user_email varchar (60) NOT NULL,
    signup_date DATETIME,
    PRIMARY KEY(user_id)
);

CREATE TABLE details (
user_id INT NOT NULL,
url_history TEXT,
voice_preference INT NOT NULL,
reason varchar(55) NOT NULL,
time_added DATETIME NOT NULL,
url_queue TEXT
);