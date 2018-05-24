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

<<<<<<< HEAD
CREATE TABLE details (
user_id INT NOT NULL,
url_history TEXT,
voice_preference INT NOT NULL,
reason varchar(55) NOT NULL,
time_added DATETIME NOT NULL,
url_queue TEXT
=======
CREATE TABLE user_preferences (
    user_email VARCHAR(60) NOT NULL,
    voice_preference INT NOT NULL,
    signup_reason VARCHAR(55) NOT NULL,
    signup_date DATETIME
);

CREATE TABLE user_articles (
    user_email VARCHAR(60),
    website_url VARCHAR(100) NOT NULL DEFAULT '',
    date_added DATETIME NOT NULL
>>>>>>> ab777892670a35cc974437425eca6ddc552e98bf
);