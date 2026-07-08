//Asynchronous function
// console.log("one")
// console.log("two")
// setTimeout(()=>{
//     console.log("hello")
// },4000)
// console.log("three")
//-----------------------------

// function sum(a,b){ //normal function
//     console.log(a+b)
// }
// function call(a,b,sumCallback){ //main/callback function
//     sumCallback(a,b)
// }
//-----------------------------
// call(1,3,sum)//function passed as an argument{sum}
// function user(name,callback){
//     callback
// }
//-----------------------------
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId)
//         if(getNextData){
//             getNextData()
//         }
//     },3000)
// }
// //callback hell problem
// console.log("getting data 1...")
// getData(1,()=>{
//     console.log("getting data 2...")
//     getData(2,()=>{
//         console.log("getting data 3...")

//     })
// })
//--------------------------------
// let promise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("I am a promise")
//         resolve("success")
//         // reject("some network issue occoured")
//     },10000)
// })
//--------------------------------
//solution of callback hell by promise
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data-"+dataId)
//             resolve("solved")
//             reject("rejected")
//         })
//     })
// }
// getData(1)
// .then
//---------------------------------