// let division= document.querySelector("div")
// console.log(division)
// let demo= division.getAttribute("id")
// console.log(demo)
// let para= document.querySelector("p")
// console.log(para.setAttribute("newClass","pigeon"))

// let div= document.querySelector("div")
// div.style.backgroundColor = "green"
// div.style.color = "yellow"
// div.innerHTML="Abhisek"

let newbtn= document.createElement("button")
newbtn.innerText="click me"
console.log(newbtn)
let div= document.querySelector("div")
// div.append(newbtn)
div.prepend(newbtn)
// div.after(newbtn)
// div.before(newbtn)

div.remove(newbtn)
// div.remove()
let para= document.querySelector("p")
para.remove()