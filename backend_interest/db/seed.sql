
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS boards CASCADE;
DROP TABLE IF EXISTS pins CASCADE;


-- DROP DATABASE IF EXISTS interest;
-- CREATE DATABASE interest;
--
-- \c interest

-- comment this out to be able to use for heroku

-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
-- email VARCHAR NOT NULL UNIQUE,
-- name VARCHAR NOT NULL,
-- password_digest VARCHAR NOT NULL,
-- username VARCHAR UNIQUE,
-- profile_pic_url VARCHAR
-- );
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  password_digest VARCHAR NOT NULL,
  username VARCHAR UNIQUE,
  email VARCHAR NOT NULL UNIQUE,
  profile_pic_url VARCHAR
);


CREATE TABLE boards(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR NOT NULL
);

CREATE TABLE pins(
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  description CHARACTER(100) NOT NULL,
  category VARCHAR NOT NULL,
  imgUrl VARCHAR NOT NULL,
  user_board_id INTEGER REFERENCES boards(id),
  user_id INTEGER REFERENCES users(id)
);




INSERT INTO users
( name, password_digest, username, email, profile_pic_url
)

VALUES (
  'Jonie',
  'pass@123',
  'JonieJohn',
   'jonathan@test.com',
   'http://www.cartoonswallpapers.net/wallpapers/futurama-fry-full-hd-background-macbook.png'
 ),

 (
   'Kimberly',
    'kim@123',
    'kmary',
     'kmary@test.com',
     'https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg'
   ),
  (
    'David',
     'dog@123',
     'dmary',
     'dmary@test.com',
      'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg'
    ),
     ('Daniel',
       'sus@123',
       'dnorris',
       'dnorris@test.com',
       'https://d1ia71hq4oe7pn.cloudfront.net/photo/59858041-1280px.jpg'
     ),
     ('Nicole',
        'nikki@123',
         'nikkimary',
          'nikkimarry@test.com',
          'https://static.knittingparadise.com/upload/2013/9/1/1378082050689-white_crow_...jpg'
        );

INSERT INTO boards
(user_id, title)
VALUES (1,'my fav music'), (2,'my dogs') , (3,'my Owls'), (3, 'basketball'), (1, 'resident evil');

INSERT INTO pins(title, description,category,imgUrl,user_board_id,user_id) VALUES ('joji first album', 'this is his first real album', 'music', 'https://i.ytimg.com/vi/pjz6tHzV5SE/maxresdefault.jpg',1,1), ('dogs','dog picture', 'animals', 'https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg', 2, 2 ), ('owls', 'the owl', 'animals','https://images.pexels.com/photos/105804/pexels-photo-105804.jpeg', 3,3 ), ('basketball', 'playing basketball','sports', 'https://images.pexels.com/photos/305243/pexels-photo-305243.jpeg',3,3),('beach', 'the beach', 'nature', 'https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg', 4, 4), ('frog', 'frog life', 'nature', 'https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg', 1, 1), ('post Malone', 'a pic from his early years', 'music', 'http://cache.umusic.com/_sites/postmalone2/images/post-bottom-min.jpg', 1,1), ('Phum Viphurit', 'singer from Thailand', 'music', 'http://www.helloasia.com.au/wp-content/uploads/2018/05/phum-viphurit-1024x688.jpg', 1,1), ('Elephant gym', 'band from Taiwan', 'music', 'https://s9.limitedrun.com/images/1276644/Elephant_Gym_website.jpg', 1,1), ('resident evil', 'from resident evil 2', 'video games', 'https://images3.alphacoders.com/985/985088.jpg',5,1),('resident evil', 'from resident evil 2', 'video games', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0276f574-98ea-4e2d-ba44-68f500bf01bc/dcu4z1q-ae186b76-db28-438c-8acc-ecf8fcebf9a5.jpg/v1/fill/w_1024,h_1821,q_70,strp/resident_evil_2_remake_claire_redfield_by_xgamergreaserx_dcu4z1q-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgyMSIsInBhdGgiOiJcL2ZcLzAyNzZmNTc0LTk4ZWEtNGUyZC1iYTQ0LTY4ZjUwMGJmMDFiY1wvZGN1NHoxcS1hZTE4NmI3Ni1kYjI4LTQzOGMtOGFjYy1lY2Y4ZmNlYmY5YTUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.neEz26hi2TXTfYoqJ4TIvDUhSJCIff1nmHg976AXM7o', 5,1)
