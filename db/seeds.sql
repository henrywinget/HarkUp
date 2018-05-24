USE HarkUp;

INSERT INTO users (first_name, last_name, user_name, user_email, user_password)
VALUES ("Test", "Test", "testytest", "test@test.com", "test1234");

INSERT INTO details (user_id, url_history, voice_preference, reason, time_added, url_queue)
VALUES (1, null, 2, "listen to articles", '2018-05-19 01-43:15', null);