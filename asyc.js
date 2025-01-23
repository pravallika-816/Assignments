//console.log(10)
//console.log(20)
//.setTimeout(()=>{
 //   console.log(30)//will run after a while and it lets the other lines execute 
//},5000)
//console.log(40)
//setInterval(()=>{
  //  document.writeln('MRU')},1500)
//!Promise
/*  let p1= new Promise((resolve, reject)=>{});
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
  })*/
  
  
  // handling promise with: 
  // then():will execute if no errors
  // catch():will execute if errors are found 
  // finally(): will execute any way
//!API fetching
/*function fetchUsers(){
    let res = window.fetch("https://jsonplaceholder.typicode.com/users")
    //console.log(res);
    res.then(val => {
        //console.log(val);
        return val.json().then(data => {
            console.log(data);
            let store = document.getElementById("store");
            //console.log(store);
            data.map((user) => {
                //console.log(user);
                store.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.company.name}</td>
                    <td>${user.phone}</td>
                </tr>
                `
            })
        });
    }).catch(err => {
    console.log(err);
})
}
//!async
fetchUsers();*/
/*let p=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise is successfully completing")
    },3000)
})
async function demo(){
    console.log('Start')
    let x=await p
    console.log(x)
    console.log('End')
}
demo()*/
async function fetchUsers() {
    let response=await fetch ("https://jsonplaceholder.typicode.com/users");
    let data=await response.json();
    console.log(data);   
}
fetchUsers();
