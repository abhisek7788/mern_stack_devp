// //ex-1
// const arr1= [1,2,7,3]
// const arr2= [...arr1,4,5,6]
// console.log(arr2)
// //ex-2(copy of an array)------
// const original=[10,20,30]
// const copy=[...original]
// console.log(copy)
// // ex-3(spread operator)------
// const user={
//     name:"ravi",
//     age:25
// }
// const updateuser={
//     ...user,
//     city:"BBSR"
// }
// console.log(updateuser)
// ex-4(overridevalues)--------
const user={
    name:"ravi",
    age:25
}
const updateuser={
    ...user,
    age:30,
    city:"BBSR"
}
console.log(updateuser)
//ex-5(spread in an function argument)------
function add(a,b,c){
    return a+b+c;
}
const nums=[1,2,3]