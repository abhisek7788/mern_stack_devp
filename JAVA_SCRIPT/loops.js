//for loop----
// let x="Abhi"
// for(i=1;i<=5;i++){
//     console.log(x)
// }

//do-while loop----
// let i=1;
// do{
//     console.log("development");
//     i++;
// }while(i<=5)

//for-of loop----
// let str="abhisek"
// let arr=[12,32,54,56]
// for(let i of str){
//     console.log(i)
// }

//for-in loop----
let student={
    name:"abhi",
    age:24,
    cgpa:9.2,
    carrier:"good"
}
for(let i in student){
    console.log("key=",i,"values",student[i])
}