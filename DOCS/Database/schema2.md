

## users
column name| data type | details
-----------|-----------|-----------
id         |  integer  | SERIAL PRIMARY KEY
name       |  string   | NOT NULL
username   |  string   | NOT NULL
email      |  string   | NOT NULL
profile_pic_url | string | optional input





## photo_master_table
column name| data type | details
-----------|-----------|-----------
id         | integer   | SERIAL PRIMARY KEY
title      | string    | NOT NULL
description| string    | optional input
category | string    | NOT NULL
imgUrl     | string    | NOT NULL
user_id    | integer   | REFERENCES users(id)
user_board_id | integer | REFERENCES user_board_collection(id)

## user_board_collection
column name| data type | details
-----------|-----------|----------
id         | integer   | SERIAL PRIMARY KEY
user_id    | integer   | REFERENCES user(id)
title      | string    | NOT NULL
