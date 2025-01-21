let p1= new Promise((resolve, reject)=>{});
console.log(p1)

let p2= new Promise((resolve, reject)=>{
    resolve("Success");
});
console.log(p2)
p2.then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("finally printing for both!")
})

let p3= new Promise((resolve, reject)=>{
    reject("Failures")
});
console.log(p3);
p3.catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("finally printing for both!")
})


// handling promise with: 
// then():will execute if no errors
// catch():will execute if errors are found 
// finally(): will execute any way
