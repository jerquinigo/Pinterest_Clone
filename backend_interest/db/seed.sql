DROP DATABASE IF EXISTS interest;
CREATE DATABASE interest;

\c interest

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL,
username VARCHAR NOT NULL,
email VARCHAR NOT NULL,
profile_pic_url VARCHAR
);


CREATE TABLE user_board_collection(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR NOT NULL
);

CREATE TABLE photo_master_table(
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  description CHARACTER(100) NOT NULL,
  category VARCHAR NOT NULL,
  imgUrl VARCHAR NOT NULL,
  user_id INTEGER REFERENCES users(id),
  user_board_id INTEGER REFERENCES user_board_collection(id)
)
