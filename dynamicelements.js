//^ creation of elements dynamically from java script
//& to create an html element in javascript we use document.createElement("tag name") method
//& in js we can create a element we can add a 
//& the elemnet which is created in js should be added to html to do that we need append the child method

let x = document.createElement("h1");
x.innerText = "Dynamic creation of html element";
x.setAttribute("id","demo")
console.log(x);

document.body.appendChild(x);    

let image = document.createElement("img");
image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s";
console.log(image);
document.body.appendChild(image);