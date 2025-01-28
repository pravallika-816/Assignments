//^ creation of elements dynamically from java script
//& to create an html element in javascript we use document.createElement("tag name") method
//& in js we can create a element we can add a 
//& the elemenet which is created in js should be added to html to do that we need append the child method

// let x = document.createElement("h1");
// x.innerText = "Dynamic creation of html element";
// x.setAttribute("id","demo")
// console.log(x);

// document.body.appendChild(x);    

// let image = document.createElement("img");
// image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s";
// console.log(image);
// document.body.appendChild(image);

// {/* <form>
//     <input type="text" placeholder="username" id="inp">
//     <input type="email" placeholder="email" id="email">
//     <input type="password" placeholder="password" id="password">
//     <input type="submit"
// </form> */}

//! dynamic elements
// let mainEle = document.createElement("div");
// mainEle.setAttribute("class","mainBlok");
// //mainEle.innerText="Main"
// console.log(mainEle);

// let topEle = document.createElement("div");
// //mainEle.innerText="Top"
// topEle.setAttribute("class","topBlok");
// console.log(topEle);

// let image = document.createElement("img");
// image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s";
// image.width = 300;
// image.height = 300;

// let bottomEle = document.createElement("div");
// //mainEle.innerText="Bottom"
// bottomEle.setAttribute("class","bottomBlok");
// //console.log(bottomEle);
// let h1 = document.createElement("h1");
// h1.innerText = "Heading";

// let btn = document.createElement("button");
// btn.innerText ="view more";

// {/* <div class="mainBlok">
//     <div class="topBlok"></div> 
//     <div class="bottomBlok"></div>
// </div> */}

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// mainEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);

let form = document.querySelector("form");
let username = document.getElementById("uname");
let password = document.getElementById("upass");
let check = document.getElementById("check");
let show = document.getElementById("show");
let gender = document.querySelectorAll("input[name='gender']");

check.addEventListener("click",e => {
    if(e.target.checked===true){
        password.setAttribute("type","text")
        show.innerText="hide password"
    }
    else{
        password.setAttribute("type","password")
        show.innerText="show password"
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let un = username.value;
    let up = password.value;
    let ele = "";

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            ele = gender[i].value;
            break; 
        }
    }

    let userDetails = {
        username: un,
        password: up,
        gender: ele,
    };
    console.log(userDetails);
});
