// Problem 1
document.getElementById("list1").style.color = "red";

// Problem 3
document.body.childNodes[3].firstElementChild.style.color="green"
document.body.childNodes[3].lastElementChild.style.color="green"

// Problem 4
let e=document.body.getElementsByTagName("li")

Array.from(e).forEach(element => {
    element.style.backgroundColor="cyan"
});


/////////////OR/////////////


// for (let index = 0; index < e.length; index++) {
//     e[index].style.backgroundColor="cyan";
    
// }