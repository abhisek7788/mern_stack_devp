const http= require('http');
const server= http.createServer((req,res)=>{
    // if(req.method==='GET' && req.url==="/users"){
    //     res.end("here are all users")
    // }else{
    //     res.end("route not found")
    // }
    if(req.method==='POST' && req.url==="/users"){
        res.end("user created")
    }else{
        res.end("route not found")
    }
})
server.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})