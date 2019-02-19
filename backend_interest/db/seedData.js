const {db} = require('./index.js')






db.none("INSERT INTO users(name, username,email, profile_pic_url) VALUES ('Jonie','Jonie John', 'jonathan@test.com','http://www.cartoonswallpapers.net/wallpapers/futurama-fry-full-hd-background-macbook.png')")

db.none("INSERT INTO boards(user_id, title) VALUES (1,'my fav music')")

db.none("INSERT INTO pins(title, description,category,imgUrl,user_board_id,user_id) VALUES ('joji first album', 'this is his first real album', 'music', 'https://i.ytimg.com/vi/pjz6tHzV5SE/maxresdefault.jpg',1,1)")
