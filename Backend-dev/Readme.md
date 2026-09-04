Node JS:-
- node js is the runtime environment of javascript
- the famous scientist ryan dhal developed node js by combination of V8 engine &C++.
- node js is an event driven javascriptr runtimme environment build on chrome's V8 engine.

Working of Node js:-
- Node js is event driven asynchronous , enabling efficien handling of multiple request.

js engines ->
- chrome -> v8 engine
- firefox - > spider monkey
- safari -> mac OS
- you can run js outside of the browser.
- you can create webserver in js language etc...

Modules in Node js:-
- a module in node js is a reuseable block of code thar contains function , objects variables etc...
- modules help us organize code into separate file, making application easir to mantain and reuse.

FS(file sysytem) Module:-
- the fs module is a build in node js module used to create ,read ,update,delete & manage files and folders.
- you don't need to instal it just require the packaf=ge and use it.
- there are two common ways to works with FS:-

1. Synchronous ->blocks the execution untill the operation finished(Blocking Operation)
2. Asynchornous -> doesn't block the rest of the program.(Non-Blocking Operation)

1. create/write a file
  - we can use write fileSync() to create new file or overwrite an existing file.
2.  Read a file->
  - we can use rea.sFILEsync() to read the content of file
3. Add Data to an exixting File ->
  - we can use appendFileSync() to add new content without deleting the existing content
4. Delete file ->
  - we can use unlinkSync() to delete a file.

import Fs methods ->
- writeFile() -. create/write a file
- readFile() -> Read a file
- appendFile() -> ann content to file 
- unlnk() -> Delete a file
- mkdir() ->remove a folder
- rename -> rename a file
- existsSync() -> check whether a file or folder exists.

Architecture of Node JS:-
- Node js uses a single threaded,event-driven architecture.
- when a request is processed through an event queue,& the event queue pass the request through event loop in blocking & non-blocking operations.
- if the asynchronous code is passed yhrough an event loop then it handled by non-blocking operatoin & give the response quickly.
- if the asynchronous code is passed yhrough an event loop then it handled by blocking operatoin & a thread i assign to a single operation to process the request in an thread poolthen it gives the required response.

Building HTTP Server:-
- node js provide a build in "HTTP" method that allows us to create a web server without installing expressor any other package


1. calculate total price :- 
- create a node.js server that takes two query parameter. 
    - price 
    - quantity 
when the user open: 
    https://localhost:3000/order?price=500&quantity=3 
the server should display: 
    price: 500 
    Quantity: 3
    Total: 1500 

2. Student result :- 
- create a node.js server that takes two query parameter. 
    - name
    - subject 
    - marks
when the user opens: 
    https://localhost:3000/results?name=pravas&subject=java&marks=85
the server should display: 
    Student: Pravas 
    Subject: Java
    Marks: 85 
    result: Pass

HTTP Methods:-
- HTTP methods tellthe server what the client wants to do with a resource
ex.-
methods             meaning                 example
GET             get/read data             get all users
POST            create new data         create a new user
PUT          replace/updte data       update complete user
PATCH       partially update data     update only user's name
DELETE          delete data                delete a user

GET Methods:-
- the get method is used to retrive the data from the server.
POST Method:-
- POST is used to replace/update an existing resource


Espress JS:-
- Express js is a lightWeight and popular web framework for node.js
- it takes it much easier to build web servers,REST API's routes & backend application



MongoDB:-
- MongoDB is  a NoSQL (non-rational)database designed to store, manage & retrive large amount of data in a flexible way.
- Unlike traditional databases(such as MySQL or PostgreSQL) that stores data in rows & tables, MongoDB store data as documents in collections.

How MongoDB works:-


MVC pattern in backend:-
- MVC STANDS FOR model-view-controller.
- it is a software architecture pattern used to organise backend application into separate responsibility,making the code easier to develop,maintain,test & scale.
client-> Routes-> Controller-> model-> database

1. model->the model handles the application's data and database structure.
2. 