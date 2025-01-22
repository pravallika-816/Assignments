//console.log(10)
//console.log(20)
//.setTimeout(()=>{
 //   console.log(30)//will run after a while and it lets the other lines execute 
//},5000)
//console.log(40)
//setInterval(()=>{
  //  document.writeln('MRU')},1500)

//API fetching
function fetchUsers(){
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
    fetchUsers();
