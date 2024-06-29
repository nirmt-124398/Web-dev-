let clas = document.getElementsByClassName("box")
console.log(clas)
clas[1].style.color = "red"

let iid = document.getElementById("redbox")
console.log(iid);
iid.style.color = "pink";

document.querySelector(".box").style.backgroundColor="peru";  // only targets 1st .box

//To target all we use a LOOP i.e. for-each loop with arrow function.

document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor="peru";
});

