//!DOM
//& DOM is a web api used to manipulate the HTML conent
//& DOM is used to ass remove and update the content inside the HTML document
//& There are 8 methods of DOM:
//~ 1. document.getElementById():
        //~this method is used to target the hmtl elemnt based on id attribute value
        //~with id attribute we can select only one element 
//~ 2. document.getElementsByClassName():
        //~this method is used to target the hmtl elemnt based on 'class' attribute value
        //~with class attribute we can select multiple element with same class name
//~ 3. document.getElementsByTagName():
        //~this method is used to target the hmtl elemnt based on 'TAGNAME' 
//~ 4. document.getElementsByName():
        //~this method is used to target the hmtl elemnt based on 'name' attribute
//&these below methods is used to target the elements bases on css selectors.
//~ 5. document.querySelector():
        //~this method selects only one element
//~ 6. document.querySelectorAll():
        //~this method selects multiple elements

//~inner

//&document.getElementById():
let element = document.getElementById("demo");
element.innerText = "DOM"; // Used to manipulate the text (property)
console.log(element);

let dv = document.getElementById("test");
dv.innerHTML = "<h1>Header</h1>"; // Use innerHTML to set HTML content
console.log(dv);