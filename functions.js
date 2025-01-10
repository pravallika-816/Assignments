//function demo(){
//    console.log("Hello i am function demo()");
//}
//demo();

//function add(a,b){
//    console.log(a+b);
//}
//add(5,6);
//add(7,8);
//add(3,4);
//add(5,6);
//add(5,4);
//add(10,30);

function isPalindrome(str) {
    let revStr = "";
    for(let i = str.length-1; i>=0; i--) {
        revStr += str[i];
    }
    if(str == revStr) {
        console.log(" palindrome");
    } else {
        console.log(" not palindrome");
    }
}
isPalindrome("Sir");
isPalindrome("madam");

// & types of functions
// ! 1) named functions
function hello(){
    console.log("hello");
}
hello();
// ! 2) anonymus function
//unction(){
    //console.log("hello"); //(function that does not have a name to declare) can not be executed independently hence we get an error
//}
// !  3) function expression
//function declaration is assigned as a value and the same function will be invokes when required
let x = function() {
    console.log("Function Expression");
};
//console.log(x); 
x();
// ! 4) immediate invoke functions 
//once the function is created immediatly it should be invoked
// ^ (anonymus function another way of execution)
(
    function(){ 
        console.log("IIFE"); 
    }
)(); //can not be called multiple times although does'nt show an error during development time
// ! 5) arrow functions
//introduce by ECMA european computer manufacturing association
//mainly to concise the code of normal functions
// ^ arrow function is similar to anonymus function
let A = _ =>{console.log("arrow function");} 
A(); //to concise it even more () this can be changed and use an ' _ ' instead
// ! 6) higher order functions
// ! 7) callback functions


//& return statements
//^ it will either return expression or variables
function add(a,b) {
    return a+b; // ~ explicit return statement
}
let y = add(10,20);
console.log(y); 

let z = (a,b) => a+b;
console.log(z(10,30)); // ~ implicit return statement these are used in arrow function only 

let z1 = (a,b) => { return a+b} ;
console.log(z(10,10));

//function hof(a){
//    return a(); 
//}
//let x=hof(function(){return"This is a call back function"})
//hof(a)
//console.log(x)

//function add(callback){
//    return callback(1,3)
//}
//let y=add(function(a,b){return a+b})
//console.log(y)

//let user=['Anju','Navya','Ankey','Shiva','Palli','Appu']
//user.map((user)=>{
//    console.log(user)
//})
//for (i in user){
//    console.log(user[i])
//}

//Clouser
var a=10;
let b=20;
function x(){
    var user ='Ankita';
    let company='Google';
    const salary=100;
    console.log(user);
    console.log(company);
    console.log(salary);
    
    console.log(a,b);
}
x()
