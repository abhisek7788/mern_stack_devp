function great(name){
    return "hello" + name;
}
function processuserinput(callback){
        const name="ravi"
        console.log(callback(name))
}
processuserinput(great)
//        note----------
//process user input takes great as parameter
// it calls great
function multiplier(factor){
    return function(num){
        return num*factor;
    }
}