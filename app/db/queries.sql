-- Use the following query to get the user's saved list
SELECT user_info.user_id, user_info.full_name, user_info.user_email, user_articles.website_url, user_articles.date_added
FROM user_info
LEFT JOIN user_articles
ON user_info.user_email = user_articles.user_email
WHERE user_info.user_email = 'Courtney@email.com';


-- Use the following query to get the user's preferences
SELECT user_info.user_id, user_info.full_name, user_info.user_email, user_preferences.voice_preference, user_preferences.signup_reason, user_preferences.signup_date
FROM user_info LEFT JOIN user_preferences
ON user_info.user_email = user_preferences.user_email
WHERE user_info.user_email = 'Courtney@email.com';


-- Use the following query to update specified user's details in multiple tables - column values can be interchaged based on field to update
UPDATE user_info, user_articles, user_preferences
SET user_info.user_email = 'Courtney@email.com', user_articles.user_email = 'Courtney@email.com', user_preferences.user_email = 'Courtney@email.com'
WHERE (user_info.user_email = 'cm@mail.com')
AND (user_articles.user_email = 'cm@mail.com')
AND (user_preferences.user_email = 'cm@mail.com');


-- Use the following query to delete a user from the database
DELETE user_info, user_preferences, user_articles
FROM user_info
INNER JOIN user_preferences ON user_info.user_email = user_preferences.user_email
INNER JOIN user_articles ON user_info.user_email = user_articles.user_email
WHERE user_info.user_email = user_preferences.user_email
AND user_preferences.user_email = user_articles.user_email
AND user_info.user_email = 'useruser@user.com';

SELECT * FROM user_articles;