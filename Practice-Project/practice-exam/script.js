
let plus=document.getElementById("inc")
let minus=document.getElementById("dec")
let heading=document.getElementById("num")
let count=0;
plus.addEventListener('click',()=>{
    count++;
    heading.textContent= count
})

minus.addEventListener('click', () => {
    count--; 
    if (count < 0) {
        return; // Exit when less than o 
    }
    heading.textContent = count;
});