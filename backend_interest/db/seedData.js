const {db} = require('./index.js')






db.none("INSERT INTO users(name, password_digest, username,email, profile_pic_url) VALUES ('Jonie','pass@123','Jonie John', 'jonathan@test.com','http://www.cartoonswallpapers.net/wallpapers/futurama-fry-full-hd-background-macbook.png'), ('Kimberly', 'kim@123', 'kmary', 'kmary@test.com','https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg'), ('David', 'dog@123', 'dmary', 'dmary@test.com', 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg'), ('Daniel', 'sus@123','dnorris', 'dnorris@test.com','https://d1ia71hq4oe7pn.cloudfront.net/photo/59858041-1280px.jpg'), ('Nicole', 'nikki@123', 'nikkimary', 'nikkimarry@test.com', 'https://static.knittingparadise.com/upload/2013/9/1/1378082050689-white_crow_...jpg')").then(()=> {

db.none("INSERT INTO boards(user_id, title) VALUES (1,'my fav music'), (2,'my dogs') , (3,'my Owls'), (3, 'basketball')").then(() => {

db.none("INSERT INTO pins(title, description,category,imgUrl,user_board_id,user_id) VALUES ('joji first album', 'this is his first real album', 'music', 'https://i.ytimg.com/vi/pjz6tHzV5SE/maxresdefault.jpg',1,1), ('dogs','dog picture', 'animals', 'https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg', 2, 2 ), ('owls', 'the owl', 'animals','https://images.pexels.com/photos/105804/pexels-photo-105804.jpeg', 3,3 ), ('basketball', 'playing basketball','sports', 'https://images.pexels.com/photos/305243/pexels-photo-305243.jpeg',3,3),('beach', 'the beach', 'nature', 'https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg', 4, 4), ('frog', 'frog life', 'nature', 'https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg', 1, 1)")
})

})
