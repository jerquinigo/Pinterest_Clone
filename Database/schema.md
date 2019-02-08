# Schema Table

## Users

column name| data type | details
-----------|-----------|-----------
id         |  integer  | SERIAL PRIMARY KEY
username   |  string   | NOT NULL
email      |  string   | NOT NULL


## Followers

column name| data type | details
-----------|-----------|----------
id         | integer   | SERIAL PRIMARY KEY
user_id    | integer   | REFERENCES users(id)
follower_id| integer   | REFERENCES users(id)
followee_id| integer   | REFERENCES users(id)

## Likes
column name| data type | details
-----------|-----------|------------
id         | integer   | SERIAL PRIMARY KEY
user_id    | integer   | REFERENCES users(id)
photo_master_table_id| integer  | REFERENCES photo_master_table(id)

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
title      | string    | NOT NULL
description| string    | optional input
categories | string    | NOT NULL
imgUrl     | string    | NOT NULL
user_id    | integer   | REFERENCES users(id)


## user_collection
column name| data type | details
-----------|-----------|----------
id         | integer   | SERIAL PRIMARY KEY
user_id    | integer   | REFERENCES user(id)
title      | string    | NOT NULL
photo_master_table_id| integer | REFERENCES photo_master_table(id)


## posts
column name| data type | details
-----------|-----------|-------------
id         |  integer  | SERIAL PRIMARY KEY
user_board | integer   | REFERENCES user_collection(id)
photoBoard | integer   | REFERENCES photo_master_table(id)
comments_id| integer   | REFERENCES comments(id)
