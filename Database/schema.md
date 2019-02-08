# Schema Table

## Users

column name| data type | details
-----------|-----------|-----------
id         |  integer  | SERIAL PRIMARY KEY
username   |  string   | NOT NULL


## Pins
column name| data type | details
-----------|-----------|-------------
id         |  integer  | SERIAL PRIMARY KEY   
user_id    |  integer  | REFERENCES users(id)


## Followers

column name| data type | details
-----------|-----------|----------
id         | integer   | SERIAL PRIMARY KEY
user_id    | integer   | REFERENCES users(id)

## Reply
column name | data type | details
------------|-----------|-----------
id          | integer   | SERIAL PRIMARY KEY
user_id     | integer   | REFERENCES users(id)

## Likes
column name| data type | details
-----------|-----------|------------
id         | integer   | SERIAL PRIMARY KEY
user_id    | integer   | REFERENCES users(id)
reply_id   | integer   | REFERENCES reply(id)

## Comments
column name| data type | details
-----------|-----------|-------------
id         |  integer  | SERIAL PRIMARY KEY
user_id    |  integer  | REFERENCES users(id)
body       |  string   | optional input
likes_id   | integer   | REFERENCES likes(id)

## photo_master_table
column name| data type | details
-----------|-----------|-----------
id         | integer   | SERIAL PRIMARY KEY
pin_id     | integer   | REFERENCES pin(id)
title      | string    | NOT NULL
description| string    | optional input
categories | string    | NOT NULL
imgUrl     | string    | NOT NULL

## user_collection
column name| data type | details
-----------|-----------|----------
id         | integer   | SERIAL PRIMARY KEY
user_id    | integer   | REFERENCES user(id)
title      | string    | NOT NULL
photo_master_table_id| integer | REFERENCES photo_master_table(id)


## Notifications
column name| data type | details
-----------|-----------|----------
id         |   integer | SERIAL PRIMARY KEY
user_id    | integer   | REFERENCES user(id)
body       | string    | optional input

## Messages
column name| data type | details
-----------|-----------|------------
id         | integer   | SERIAL PRIMARY KEY
user_id    | integer   | REFERENCES user(id)
body       | string    | TEXT NOT NULL



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
