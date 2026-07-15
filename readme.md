frontend part -> 
1. HTML (Structuring the website)
2. CSS (styling the web pages)
    - Bootstrap (light weight framework)
    - Tailwind (light weight framework)
3. Javascript (Building logic / function)
    - React JS (library of JS)
    - Next JS (Framework of React JS)

Backend part -> 
4. Node JS 
    - Express JS (framework)

Database part -> 
5. MongoDB 
    - Mongoose (framework)

API Integration & Security -> 
6. restFul API integration 
7. Authentication & Authorization 

Artificial Inteligence -> 
8. Basic LLM's model (large language model)
9. Promt Engineering 
10. ChatGPT/ OpenAI/ Gemini etc.. 
11. AI chatbot 

Deployment & Devops Part -> 
12. Hosting in vercel, render like cloud platform 
13. use Docker / AWS for deployment & pipeline 

Capstone project -> 
14. build end-to-end MERN stack project 
15. AI integration with MERN 

HTML :- 
- HTML stands for Hyper text markup language. 
- it is used for structuring the websites. 
- HTML is a markup language because HTML contain the skeleton structure of a web page also it builts on tags so    that why we tell them HTML is a markup language. 
- all the HTML written through some tag lines. 
- the main element/ tag of HTML is <html>. 

Head :- 
- in head tag we have some tag like <title> & some meta elements. 
- <title> tag contain our website title in the title bar. 
- meta elements help us to create responsive with screen size. 
- we also attched some external style sheet link in that head tag. 

Body :- 
- body contain all the page structure of a web page. 
- we can design & development all the things in that body part. 

Heading :- 
- heading is a mojor element in our HTML page. 
- there are 6 types of header are there (h1 - h6)
- <h1> is the bigger heading & <h6> is the smaller heading. 

Paragraph :- 
- paragraph play a major role to describe our data or information briefly. 
- it is denoted by a element <p>.

Break :- 
- it is used to break the line & creating a new line. 
- it is denoted by <br>
- it is single tag. 

Horizontal :- 
- it is used for creating a horizontal line. 
- it is denoted by <hr>
- it is also a single tag. 

Image Tag :- 
- when we put a image in our website we just need a <img> tag for put our image. 
- <img> also is a single tag. 
- in that <img> tag we have some elements to configure our image in a right direction so we need some attributes. 
- attributes means it's an behaviour of an HTML element. 
- in <img> tag we have some attributes like, 
    -> src (image source)
    -> alt (alternate of the image, we can put image name)
    -> height (image height)
    -> width (image width)

Anchor Tag:- it is used to attach some outside links in our web pages.
- It contains 2 attributes ->href &target
- HREF-> hyper reference ->reference a point or page to another page.
- target-> it means how we can open that link
- _self-> it opens that link in our own website itself
- _blank-> it will open that link by creating a new tab
- anchor tag denoted by <a>.

HTML Formatting:-
-> to format our text in a proper way.there are 10 types of formatting are present.
1. <b>- bold the text
2. <i>-iotallic the text
3. <em>-emphasized the text
4. <small>-smaller the text the text
5. <ins>-inserted the text
6. <del>-deleted the text
7. <mark>-marked the text
8. <strong>-stronger the text
9. <sup>-superscript the text
10. <sub>-subscript the text

HTML Table:-
- As we draw a normal table to maintain our data, so html provide a table like structure.
- <table> tag is the main tag of html table.
- Inside html table we have:-
  -<tr> -table row
  -<td> -table data
  -<th> -table heading
  eg-   Sl.no    name     salary
          1     abhisek   25000
          2     brajesh   20000
          3     gaurab    49

HTML LIST:-
- As our day to day life when we store some data inside a proper format that we called our list of data.
->html also provide a list to store some data inside it.
->in html there are two types of list:-
 1. Unordered list:- When we store data in a un organised form that called unordered list.
  ->it is denoted by<ul>.
  ->inside <ul> tag we have <li> tag.{<li>- list item}
 2. ordered list:- When we store data in a organised form that called ordered list.
  ->it is denoted by <ol>.
  ->inside <ol> we have <li> tag. 

Block level element & Inline element in HTML
- Block level element:- A block level element always start automatically & add some space before & after the element.
->It always takes up the full width available.
ex- <div>,<p>,<main>,<form>,<section>,etc.
- Inline element:-An inline element doesn't starts on a new line.
->it only takes as much width as necessary.
ex- <span>,<label>,<button>,<sup>,<sub>,<br>,etc.

HTML Form:- An HTML form is used to collect some user input for the data storage purpose.
- <form> tag is the main tag of HTML Form. 
- inside <form> tag we have lavel & input tag for take the user input.
There are some input tag like:-
1. <input type="text">
2. <input type="button">
3. <input type="checkbox">
4. <input type="colour">
5. <input type="date">
6. <input type="email">
7. <input type="file">
8. <input type="hidden">
9. <input type="image">
10. <input type="month">
11. <input type="number">
12. <input type="password">
13. <input type="radio">
14. <input type="range">
15. <input type="submit">
16. <input type="search">
17. <input type="time">
18. <input type="url">
19. <input type="weak">
20. <input type="tel">

CSS :- 
- CSS stands for cascadding style sheet. 
- Basically CSS works for the designing & styling our web pages. 
- CSS is not a programming language, it's a styling language.. 
- syntax :- 
selector{
    properties: value;
}
ex. 
  h1{
    color: red;
  }
- in the above example h1 is the selector, color is the properties & red is the value of that properties. 
- there are 3 types of css are present. like.. 
1. inline CSS :- 
- we used inline css inside the tag name. 
- inline css ave highest priority by compare with other types of css. 
- we can put our styling by creating a "style" attribute inside the tag. 

2. Internal CSS :- 
- we used internal css inside <head> tag, by creating a <style> tag inside it. 
- internal css used many cases for small codebase. 

3. External CSS 
- we used external css by creating a separate CSS file and link that file in our HTML page. 
- we can link the external css file by <link> tag.
- it is most popularly used because everyone wants to see the clean code so all files have to be separated.

Selector in css:-
- we use css selectors for selecting an html element for shake of designing.
- there are 5 types of selectors:-
1. ID selector :- 
- is selector is a type of selector that used for unique design. 
- it is denoted by "#".

2. Class selector 
- class selector is a type of selector that used for similar design in multiple element. 
- it is denoted by "."

3. Group Selector 
- group selector is a type of selector that used for design more than one element by creating a group. 

4. Universal Selector 
- Universal selector is a type of selector that used for design whole HTML element in a single design. 
- it is denoted by "*".

5. Element Selector
- element selector is a type of selector that used for design single single element separatelly. 

Practice task :- 
1. create a simple div with an id "box". add some text content inside the div. set it's background color to "blue".
2. create 3 headings with h1,h2 & h3. give them all a class "heading" & set color of heading to "red".

Properties in CSS :- 
1. color : red/blue/green etc... 
2. background-color : red/green/blue etc...
3. text-align : left/right/center
4. text-decoration : underline/ overline/ line-through
5. font-weight : normal/ bold/ bolder/ 100/ 300/ 900 etc... 
6. font-family : italic/ san-sarif/ roboto/ cursive 
7. line-height : 1/ 2/ 4/ 5 etc.... 
8. text-transform : uppercase/ lowercase/ capitalize

Box Model in CSS :- 
- box model is used for properly placed the element in the right direction. 
- it majors all the size of that particular element and place them. 
- there are 5 types of box model are there... 
   1. height 
   2. width
   3. border (border-radius)
   4. margin (left, right, top , buttom)
   5. padding (left, right, top, buttom)

Display Properties in CSS :- 
- we used display property to showcase our element in a proper form to display. 
- basically there are 4 types of display property like.. 
   1. display-inline -> takes only the space required by the element
   2. display-block -> takes full space available in width.
   3. display-inline-block -> similar to display inline but difference is that when we apply padding over here. 
   4. display-none -> to remove element from the document flow. (none - nothing)

flex-box in CSS:-
 - we can use CSS flex box to create one dimentional design in a single page.
 - flex box has some properties like->
  1. display: flex;
  2. flex-direction :row/row-reverse/coloumn/coloumn reverse
  3. justify-content: center/space-between/space-evenly/space-around
  4. align-item:center/top/bottom
  5. flex-wrap: wrap/no-wrap

grid layout in CSS:-
- it is a 2-D layout system for the web.
- a grid is a collection of horizontal& vertical lines creating a pattern agnaistwhich we can line up our design element.
- some imp prop of grid layout:-
 1. display:grid;
 2. grid templet coloumn: repeat(4,1fr)/100/200/300;
 3. grid gap: 20px/30px etc..
 4. grid auto rows: 100px/200px etc

CSS units:-
 - basically there are multiple unoits in css-
  1. px(pixel)-fixed
  2. %(percentage)- percentage fully depends on their parent element
   ex- rakesh- 100->20%-> 20
       bikash- 1000->20%-> 200
  3. vh(viewport height) & vw(viewport width)-> it will increase or decrease their size as per the screen size.
  4. vmax(viewport maximum)->if the screen size can be squized to a phone screen so our content can be small so it break that & create a new line of content.
  5. em & rem(root units of css)-> we can handle all the tag by a root element/tag so that it could be feasible for our content.

html- semantic tags
css- animation(scale,skew,rotate,etc..)

Position property in CSS :- 
- the position property specify the type of positioning method used for an element. 
- there are 5 types position property ae there... 
   1. static - default value, it's not change their position.
   2. relative - the element is positioned relative to it's normal position. 
   3. absolute - the element is positioned relative to it's ancestors. 
   4. fixed - the element is positioned relative to the browser window. 
   5. sticky - the element is positioned based on the user scroll position. 

Animation in CSS:-
Animation (transition) :- to change the state of an object
- transition enables you to define the transition between two states of an element. 
- some important transition properties are... 
   1. transition-property: property you want to transition (font-size, color, bg color)
   2. transition-duration: 2s/3s/4s etc...;
   3. transition-timing-function: ease-in/ ease-out/ ease-in-out/ linear / steps(4) etc... 
   4. transition-delay: 2s/3s/4s etc.....;
   * transition shorthand (property names/duration/timing-function/delay)
      transition: font-size 2s ease-in 5s;

Animation (transform):- 
- it is used to apply 2D & 3D transformation to an element. 
1. Transform (Rotate) -> 
    - transform: rotate(45deg/90deg etc..)
    - rotate: 45deg;
    - rotateX: 45deg;
    - rotateY: 45deg;
    - rotateZ: 45deg;

2. Transform (scale) -> 
    - transform: scale(2/3 etc...)
    - transform: scale(1,2)
    - transform: scaleX(0.5)
    - transform: scaleY(0.5)
    - transform: scaleZ(0.5)

3. Transform (Skew) -> 
    - transform: skew(45deg);
    - transform: skewX(45deg);
    - transform: skewY(45deg);

JAVASCRIPT :-
- JavaScript is used for building logics of a web page.
- javascript is a high-level programming language, used in both client side (frontend) as well as server side (backend).
- JavaScript comes from echma script so we see the latest version of javascript in terms of echma script.
- the latest version of javascript is ES16.
- Node JS is the runtime environmment of javascript.

Variable in JavaScript :-
- Variable is a container to store some digital data inside it.
- In JavaScript there are 3 types of variable are there
1. var :-
- var is a type of variable which is used for changing the variable value in later stage.
- var is used in older browser, so now in these days we will don't use the var most of the cases.
2. let :-
- let is a type of variable which is also used for changing the variable value in later stage.
- let is a block scope/function scope so we have been used let most of the cases.
3. const - constant

Rules for creating the variable name :- 
- Variable names are case-sensitive like "a" & "A" is different.
- only letters, digits, underscore & special character($) is allowed.
(Do not keep white space over here)
- only letter, underscore, or special character($) should be the 1st character only.
- reserved words can not be a variable name.
ex. fro, while, var, let, console etc...

Datatype in JavaScript :-
- Datatype is an attribute associated with a piece of data that tells a computer system how to interpret it's value.
- In datatype we used "typeof" operator to know, what type of data it is. 
- mainly in JavaScript there are 2 types of datatypes are there..

1. Primitive datatype :-
- In primitive datatype there are 7 types of primitive datatypes are there...
  1. Number - Number are the type of datatype those it contain some numerical values.
  2. Boolean - In boolean datatype we got boolean value like true/false.
  3. Undefined - the data is not defined.
  4. Null - Nothing
  5. bigInt - Big integer value
  6. String - sequence of characters 
  7. Symbol - In symbol we got one symbol of more than one value.

2. Reference / non-primitive datatype :-
- Reference datatype are the type of datatype which can hold multiple element in a single frame.
- There are 3 types of reference datatypes are there..
  1. Array -> array is a collection of similar type of data stored in contigious memory location.
  - arry index starts from '0'.
   ex let arr=[56,6,647,746]
  2. Object -> object is a reference data type WHERE WE CAN STORE more than one element in a single frame.
  - mainly objects are working on (key:value) pair.
  ex.
        let bibhu ={
            "name" : "bibhu",
            "phone-no":678943289,
            "address":"keonjhar",
           "carrier":"very Good"
        }
        - in the above example left hand side are the "keys", right hand side are the "values " of that key & bihu is our object name.
  3. Function :- function is a block keyword that perform specific task.
  - function reduce our code complexity, time & space complexity.
  - Syntax :-
    Function creation->
    function My_schoole(){
        console.log("ilove my school")
        console.log("my school")
        console.log("school")
    }    
    My_schoole()
    My_schoole()

Operator in js:-
- operator are key features to do some task or operate some taks.
    - ex. A+B
    - in the above example A&B are the operands & "+" sign is our operator.
    - in javascript , there are 5 types of operator are there....
    1. Arithmetic Operator ->(+, -, , /, %, *)
    2. assigement Operator ->
    3. comparison operators->
    4. logical operators->
    5. unary operators->

Coditional statement ->
 - to imlement some condition in the code.
 - there are 3 types of conditional statement are there...
1. if-condition :-
  - if condition is true then statement is true.
  - syntax :-
  if(condition){
    statement
  }
2. if-else condition  :-
  - if condition is true statement is true otherwisw falsw.
  - syntax :-
  if(condition){
    statement
  }else{
    statement
  }
3. if-elif condition :-
 - it's check the condition multiple times,where the condtion is true, its returns the statement.
 - syntax :-
 if(condtion){
        statement
 }
 else if(condtion){
     statement
 }else if(condtion){
     statement
 }else{
     statement
 }

practice task :-
write a code which give grades to students according to their score..
1.90-100(A)  2. 80-89(B)  3. 70-79(c)  4. 60-69(D)  5. 50-59(E)  6. 0-49(f-fail)

loops in javascript ;-
- loops are used to execute a piece of code again & again.
- there are 5 types of loops are there....
1. for loop :-
syntax :-
for(initialization;conditon;updation){
    statement
}
ex. we want to print "js" 5 times...
for(let i=1;i<=5;i++){
    console.log("javascript")
}
2. while loop->
syntax :-
initialization;
while(condtion){
    statement;
    updation;
}
3. do-while loop->
Syntax :-
initialization;
do{
   statement; 
   Updation;
}while(condtion)
4. for-in -> it iterates on string  & array.
5. for-of loop -> it iterates on objects.

string in javascript:-
- basically string is a sequence of character used to represent text.
- create a string-> let str="abhisek".
- we calculate the string length-> str.length property.
- we calculate string index-> str[0],str[1]etc..

string literals & interpolation
string literals:-
- its a way to have embeded expressionin string.
- it is denoted by''.
string interpolation:-
- to create a string by doing substitution of placeholder.
ex. -> string text ${expression} string text.

escape symbol in string:-
1. \n-> new line
2. \t->new tab

string method:-
1. str.toUpperCase()->// note string can't be changed original character so that  why we will take one another variable to do this.
2. str.toLowerCase()
3. str.trim()
4. str.slice(start,(end-1))
5. str.conact(str2)
6. str.replace(oldVal,newVal)
7. str.replaceAll(oldVal,newVal)
8. str.charAt(idx)

Array in  javascript:-
- array is a collection of items.
  ex- let arr=["iron","bat man"]
  array index start from [0].
looping over an array->
   loop->iteration
   syntax-  for (let i=0; i< arr.length(); i++)
{
    statement
}

methods of array:-
1. push- add an element to end of an array
2. pop()- remove an element from the end of array
3. toString()-convert array to string
4. concat()-add two or more array/ join multiple array
5. unshift()-add an element to the stert of an array
6. shift()-remove an element from thestart of an array
7. slice()-return a peice of an array
8. splice()-change original array(add.remove,replace)    

practice qstn->
1. for a given array with marks of students ->[78,90,54,32,98,25,70].
find the average marks of the students.
2. for a given array with price of 5items ->[789,543,590,432,489].
all tems have an offer of 10% off of them .change the array to store final price after applying offer.

Function in javascripts:-
- it is a block of code that performs specific task,can be invoked or called whenever we need.
- ex.(in-build function)
1. console.log("hello") -> in this code .log() is a function
2. "abc" .toUppercase() -> in this code .toUpperCase() is a function
3. [1,2,3].push(4) -> in this code .push() is a function
- there are 2 types of function in javascript.
  1. Normal function:-
-> Type A Function ->
    //Function Creation ->
    function function_name(){
        //do some task
    }
    //function calling->
    Function_name()

-> Type B function ->
    //function creation ->
    function function_name(parameter_1,parameter_2)
    {
        //do some task
    }
    //function calling ->
    function_name(arg_1,arg_2)

   2. Arrow function :-
   - it is a compact way of writing a function.
   - it uses map() function to retrive the backend data, filter() function for filterise for filterise our data etc...
   //function creation ->
    const function_Name =(param_1,param_2) =>
    {
        //to do some task
    }
    //function calling
    function_name(arg_1,arg_2)

    normal function ->
     function sum(a,b){
        return a+b;
     }
     sum(2,3)

   arrow function ->
    const sum =(a,b) =>{
        return a+b;
    }  
    sum(2,3)

pratice question in (tcs ):-
1. create a function using the "function " keyword that takes a string as an arument & return the number of vowels in that string

mapmethod/function in js:-
- create a new array with result of some operation.the value it's callback return are ised to form a new array.normally we create a new aray by calling the function in every array element.
- map doesn't change the original array.
- it does not execute the function for empty array.
- Syntax :-
arr.map (callbackfunction (value,index.array))

Filter method / function in js:-
- create a new array of element that give true for a condition/filterization.
- ex- all even array in the given lisst
   let newArrr= arr.filter((val)=>{
    return val%2===0;
   })
For each loop in array:-
- arr.forEach(callback function)
- callbackFunction -> it is a function to execute for each element in the array.
- callbackFunction is a function that passed as an arugument of another function.

Advance js:-
1. DOM
2. Event & Event handeling
3. sync & Async code(promise, .then, .catch, async & await)
4. API handling

DOM in javascript:-
- DOM stands for document model.
- when a web page is loaded,the browser create a document object model of that page.
- the HTML DOM model is constructed as a tree like structure.
windoes ->document ->HTML ->Head ->meta tags & title
                          ->body ->h1,h2,img etc..

why we use DOM in js:-
- js can change all the HTML element in the page.
- js can create,delete or edit any html page directly through dom.
- js can also access CSS styling directly.

Window object:-
- the window object represents an open window in a browser.
- it is a browser object & it automatically creates by browser.
- it is also a global object with lots of properties & methods.

DOM Manipulation:-
1. selecting with ID->document.getElementById("my ID")
2. selecting with class->2. documnet.getElementsByclassName("myclass")
3. selecting with tag->document.getElemensByTagName("p")
4. querry selector->
  - document.queryselector("id/class/tag")
  - document.queryselectorAll("id/class/tag")
5. attributes->
  - getAttributes(attr)->toget the attribute value
  - setAttributes(attr,value)->toget the attribute value
6. Insert element ->
    - node.append(ele)->adds at the end of the node(inside)
    - node.prepend(ele)-> add at the start of the node(inside)
    - node.after(ele)-> adds after the node (outside)
    - node.before(ele)-> adds before the node (outside)
7. Delete element ->
    - node.remove(ele) -> remove the node

Event in js:-
- the change in the state of an object is known as event.
- some event are:-
  1. mouse Events (click,Dblclick,onmouseover)
  2. keyboard Events (keypress,keyup,keydown)
  3. form event (submit)
  4. 4. print Event ....

Event Handeling:-
- syntax :-
node.event =()=>{
    //handle here
}

event object :-
- it is a spacial; object that has details about the event.
- all event handler have access to the event objects properties & methods.
- syntax :-
node.event=(e) => {
    //handle here
}
- in methods you can get ->e.target,e.type etc....

practice task :-
Q.create a toggle button that chage the screen to dark mode when clicked a light mode when clicked again.

Synchronous :-
- it means the code runs in a particular sequence of instruction give in the program.
- Each instruction waits for the privious instruction to complete it's execution.
ex.
console.log("one")
console.log("two")
console.log("three")
output -> one two three

Asynchronous :-
- Due to synchronous programming ,sometimes imp. instruction get blocked due to some privious instruction, which causes a dealy in the UI.
- asychronous code execution allows to execute next instuction immediatelly and doen't block the flow.
 ex.
        console.log("one")
        console.log("two")
        setTimeout(() =>{
            console.log("three")
        }, 4000)//4000 ms = 4 s

        console.log("four")
        console.log("five")
output -> one, two ,four ,five, three

callback in javascript :-
- a callback function which passed as an argument of another function.

callback hel :-
- it's nested callback stacked below one after another forming a pyramid structure.
- this style of programming becomes difficult to understand & manage.

promise in JS :-
- it is a solution of callback hell.
- syntax :-
let promise = new promise ((resolve,reject)=>{
    //statement
})

- a javascript promise object can be ->>
 1. pending -> the result is undefined
 2. resolved -> the result is a value (fulfilled)
 3. reject -> the result is an error

- promise.then((res)=>{
    //statement
})
- promise.catch((err)=>{
    //statement
})

Async & Await in JS :-
- async function always return a promise.
- syntax :-
async function myfunc(){
    //statement
}

note :- await pauses the execution of its surrounding async function until the promise is settled.
<!-- example :-
async (statement 1 )
await ->(statement 2 )
await ->(statement 3 )
await ->(statement 4) -->

API Handing /fetch API :-
-  the fetch API provides an interface for fetching data.
- it uses request & response object.
- the fetch() methods is used to fetch a data.
- syntax :-
let demo=fetch(URL)
//josn => javascripts object notation

status code of Node js :-
- 200 ->ok
- 201 ->create
- 202 ->accepted
- 300 ->multiple choice
- 302 -> found
- 400 -> bad request
- 402 -> payment required
- 404 -> Not found
- 406 -> not accept
- 408 -> request timeout
- 500 -> internal server error
- 502 -> bed gateway
- 504 -> gateway timeout

React JS:-
- React js is a fronted java scripts Library.
- react js developed by the facebook by software engineer jordan walke.
- react is also know as reaact js or Reactjs.
- basically react is a tool for building UI (user interface) components.

NPX :-
- npx stands for  node package Execute.
- purpose -> it is an npm package runner bundled automatically with npm.
- function -> it allows ypo to run & execute javascript package directlly from the npm, without needing in install them parmanentlly.
- stroge-> it download the package to a temporary cache memory,execute the cammand & clear it up right after.

NPM :-
- NPM  stands for node package manager.
- purpose ->it is the default package manager for node js.
- function -> it installs ,updates & deletes javascripts packages and dependencies for our project.
- storage -> it saves package parmanentlly either locally inside our project's "node modules" folder or globally on our system.

React js History :-
- latest version of react js is 19.2.7
- inintal release to the public was in july 2013.
- React js was 1st used in 2011 for facebook's newsfeed features.
- initially react gained lots of hate for the mix of javascripts + HTML but in later stage or now these days 45% of software developer used react js as the core library for software development.
- ".jsx" is the extention of react js.
- jsx stands for 'javascript XML' means javascript + HTML.
--------------------------------------------------------------------------------------------------------------------
- When you are installing react it will have multiple way to install and setup but there are 2 common way that we are using react js is 
1. CRA(create-react-app)
2. vite(fastest way to install rect js)

File structure of a react js folder ->
1. README.md ->
 - we will use readme.md for write some description or outline of our project.
2. package.json ->
 - it will keep scripts , versions details  & dependency of our project.
3. package-lock.json ->
- it basically store dependency of package.json file.
4. .gitignore file ->
 - files & folder ignored by git tracking.......
5. src(source folder) ->
- it is the main source folder where we can create file & write code in it.
6. Public ->
 - Public is used to take our website logo that show publically and we can store images and video in that public folder by creating separate separate folder.
7. Node Modules -> 
 - auto manages extrenal depandancies that need for execute the project and we can say it is the god father of the react js project.

props in Reacts js :-
- props stands for properties.
- props are passed to components via HTML attributes.

Practice Question From react js :-
1. Create a functional component called "Greeting" that takes a "name" Prop and display"Hello ,<name>!" 
expected output -> Hello , Rakesh !

2. create a component "userCard" that takes props: name, age & city and display them in a card format. 
expected output -> 
name : Rakesh 
Age : 23 
City : Bhubaneswar

3. create a component Button that accepts a label prop. if no label is passed, it should display "Click Me".

4. create a parent component App that passes a message prop to a child component "MessageBox". The child should display the message. 
expected output -> App -> MessageBox

rakeshmohapatra2078@gmail.com
