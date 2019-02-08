

users
id SERIAL PRIMARY KEY,
username VARCHAR NOT NULL




pin
id SERIAL PRIMARY KEY
user_id INT REFERENCES users(id),




followers
id SERIAL PRIMARY KEY
users_id INT REFERENCES users(id),




reply
id SERIAL PRIMARY KEY
users_id INT REFERENCES users(id),
body TEXT NOT NULL,
session_token VARCHAR NULL NOT FALSE

likes
id SERIAL PRIMARY KEY
users_id INT REFERENCES users(id),
reply_id INT REFERENCES reply(id)

comments
id SERIAL PRIMARY KEY
users_id INT REFERENCES users(id),
body TEXT NOT NULL
likes_id INT REFERENCES likes(id)

photo_master_table
id SERIAL PRIMARY KEY
pin_id INT REFERENCES pin(id),
title VARCHAR NOT NULL,
description VARCHAR NOT NULL,
categories VARCHAR NOT NULL,
url VARCHAR NOT NULL


user_collection
id SERIAL PRIMARY KEY
users_id INT REFERENCES users(id),
title VARCHAR NOT NULL,
photo_master_table_id INT REFERENCES photo_master_table(id),


notifications
id SERIAL PRIMARY KEY
users_id INT REFERENCES users(id),
body TEXT NOT NULL


messages
id SERIAL PRIMARY KEY
users_id INT REFERENCES users(id),
body TEXT NOT NULL
