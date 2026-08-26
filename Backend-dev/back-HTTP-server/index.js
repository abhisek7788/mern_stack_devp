const http=require('http');
//http is a built in nodejs module, so we don't need to install it.
const server=http.createServer((req,res)=>{
    res.write("hello from node js server")
    res.end()
})
//createServer() creates an HTTP server
//it provides two imp. objects(req.res)
// req-> request(contain inf. about what the client is asking for..)
//ex. req.url,req.method,req.headers etc
//res-> response(used to send the response back to the client)
//ex. res.write("hello"),res.end(),res.setHeader() etc..
server.listen(8000,()=>{
    console.log("server is running on local host:8000")
})