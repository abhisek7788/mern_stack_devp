// function myfunction(){
//     console.log("today is a good day")
//     console.log("We learn js")
// }
// myfunction()

// //type B function
// function myfunction(a,b){
//     console.log(a+b)
// }
// myfunction(7,4)

// //foreach loop
// let arr= [1,2,3,4,5]
// arr.forEach(function printVal(val){
//     console.log(val)
// })
//arr.forEach((val) =>{
    // console.log(val)})

// let arr1= ["goa","pune","bbsr"]
// arr1.forEach((val)=>{
//     console.log(val)
// })
// let num= [2,3,4,5,6]
// let newarr= num.map((val)=> {
//     return val*val
// })
// console.log(num)
// console.log(newarr)

// // Filter method----
// let arr= [1,2,3,4,5,6]
// let evenarr= arr.filter((val)=>{
//     return val%2 === 0;
// })
// console.log(arr)
// console.log(evenarr)
let marks= [56,89,49,95,97,90]
let arr2= marks.filter((val)=>{
    return val>= 90;
})
console.log(arr2)