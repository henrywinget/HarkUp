-- Use the following query to get the user's saved list
SELECT user_info.user_id, user_info.full_name, user_info.user_email, user_articles.website_url, user_articles.date_added
FROM user_info
LEFT JOIN user_articles
ON user_info.user_email = user_articles.user_email
WHERE user_info.user_email = 'hw@email.com';


-- Use the following query to get the user's preferences
SELECT user_info.user_id, user_info.full_name, user_info.user_email, user_preferences.voice_preference, user_preferences.signup_reason, user_preferences.signup_date
FROM user_info LEFT JOIN user_preferences
ON user_info.user_email = user_preferences.user_email
WHERE user_info.full_name = 'Courtney Montgomery';


-- Use the following query to update the user's email in multiple tables
UPDATE user_info, user_articles, user_preferences
SET user_info.user_email = 'Pablo@email.com', user_articles.user_email = 'Pablo@email.com', user_preferences.user_email = 'Pablo@email.com'
WHERE (user_info.user_email = 'pp@email.com') and (user_articles.user_email = 'pp@email.com') and (user_preferences.user_email = 'pp@email.com');


SELECT * FROM user_info;