INSERT INTO user_info (full_name, user_email, signup_date) VALUES 
('Courtney Montgomery', 'cm@mail.com', '2018-05-21 00:00:00'),
('Henry Winget', 'hw@mail.com', '2018-05-21 01:00:00'),
('Pablo Plato', 'pp@mail.com', '2018-05-21 02:00:00' ),
('Test User', 'tu@mail.com', '2018-05-21 03:00:00');

SELECT * FROM user_info WHERE user_email = 'Courtney@email.com';