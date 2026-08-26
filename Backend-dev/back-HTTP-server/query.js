const http = require ("http")

const server = http.createServer((req,res) =>{
    // const url = new url(req.url,`http://$(req.headers.host)`)
    // const id = url.searchparams.get("id")
    // res.end(`user Id:${id}`)
        const url = new url(req.url,`http://$(req.headers.host)`)
        const name = url.searchparams("names")
        const price = url.searchparams("price")

res.end(`Product:${name},price:${price}`)
}) 

server.listen(3000,()=>{
    console.log("server listen on port:3000")
})

//req.url -> gets url
// new url () -> create url objects
// searchparams.get("id") ->gets query [arameter]
//res.end() -> sends response
//server.listen(3000)-. starts server on localhost:3000