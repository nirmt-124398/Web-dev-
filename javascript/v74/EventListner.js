// EVENT BUBBLING
document.querySelector(".child").addEventListener("contextmenu",(e)=>{
    e.stopPropagation()
    alert("Child was right clicked...")
})

document.querySelector(".subcontainer").addEventListener("contextmenu",(e)=>{
    e.stopPropagation()
    alert("subcontainer was right clicked...")
})

document.querySelector(".container").addEventListener("contextmenu",(e)=>{
    alert("container was right clicked...")
})

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

// setInterval(() => {
//     document.querySelector('.child').style.background=getRandomColor();
// }, 3000);

setTimeout(() => {
    document.querySelector('.child').style.background=getRandomColor();
}, 3000);