// let url= "https://jsonplaceholder.typicode.com/posts"
function getUser(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
}