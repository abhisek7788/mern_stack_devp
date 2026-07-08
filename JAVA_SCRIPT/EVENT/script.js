// let demo= document.querySelector("#btn")
// demo.onclick= (e)=>{
//     // console.log("click me 1 time")
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
// }
// let demo2= document.querySelector("#btn1")
// demo2.ondblclick= ()=>{
//     console.log("btn was clicked 2 times")
// }
// let test= document.querySelector("#para")
// test.onmouseover= ()=>{
//     console.log("mouse is over the paragraph")
// }
let newbtn= document.querySelector("#btn")
let currmode= "light"
newbtn.addEventListener("click",()=>{
    if(currmode=== "light"){
        currmode= "dark";
        document.querySelector("body").style.backgroundColor= "black"
    }else{
        currmode= "light";
        document.querySelector("body").style.backgroundColor= "white"
    }
    console.log(currmode)
})