# API ENDPOINTS


## log in
* GET. "/api/session" - Log in

* DELETE "/api/session" - Log out

## users

GET. "/API/categories/photos" - (display all the photos on the home page after login)

* GET."/API/username/" - (get user account)


* DELETE."/API/users/:id/" -(delete user account)

* PATCH. "/API/users/:id/" -(edit single user)

* POST. "/API/users/" - (create single user)



## Boards

* GET."/API/users_collection/:id/" - (display one board)
* POST."/API/photoPins" - (create one photo)

* POST."/API/boards" - (create one board)

* DELETE."/API/photoPins/:id" -(delete one photo)

* PATCH."/API/photoPins/:id" -(edit one pin)

* PATCH. "/API/boards/:id" - (edit one board)

* DELETE. "/API/board/:id" - (delete one board)

* GET."/API/photoPins/:id/" - (get one photo)

* GET."/API/users/:id/photoPins/" - (get all photos for one user)

* GET. "/API/boards/:id/photoPins/" - (get all photos for one board)

* GET."/API/photoTable/search/:query" - (Search all categories based on users queries)

* GET."/API/topics/" - (shows categories)



//need delete and patch for the users and the comments section
