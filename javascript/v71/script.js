// let div = document.createElement("div");
// div.innerHTML = "I am inserted by <b>by Nirmit</b>";
// div.setAttribute("class", "created");
// document.querySelector(".container").append(div);
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".container").replaceWith(div);

let cont= document.querySelector(".container")

cont.insertAdjacentHTML("afterbegin","<b> Hi, I am Nirmit </b>")