const http= require ("http")

const server = http.createServer((req,res) =>{
    const url = new url(req.url,`http://$(req.headers.host)`)

    const price = url.searchparams.get("price")
    const quantity = url.searchparams.get("quantity")
    const total = Number(price)*Number(quantity)

    res.end(
        `price:${price}\n`+
        `quantity:${quantity}\n`+
        `total:${total}`
    )
})
server.listen(3000,()=>{
    console.log("server listen on port:3000")
})