// function outer() {
//     let outerVar = "i am in the outer scope"
//     function inner() {
//         console.log(outerVar)
//     }
//     return inner;
// }

// const closure = outer()
// closure()
// closure()

// outer()
// outer()
// - inner() is defined inside outer() function.
// - it uses outerVar from their parent scope

// step 3->
//- instead of calling inner(), we return the function itself.

// step-4->
//
// function counter(){
//     let count= 0;
//     return function(){
//         count++;
//         console.log(count)
//     }
// }
// const increment= counter();
// increment()
// increment()
// increment()

// function createcounter(){
//     let count= 0;
//     function increments(){
//         count++;
//     }
//     return increments;
//     function getcount(){
//         console.log(count)
//     }
//     return getcount;
// }

// const abcd = createcounter();

// abcd()

function createmessage(msg){
    return function(){
        console.log(msg)
    }
}
const sayhello = createmessage("namaste")
sayhello();
const sayhi = createmessage("everyone")
sayhi();

function add(a){
    return function(b,c){
        return a+b+c;
    }
}

const sum=add(2);
console.log(sum(4,5))