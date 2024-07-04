let btn=document.querySelector(".btn")

btn.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b>This is</b> Nirmit Rampal"
})

document.addEventListener("contextmenu",()=>{
    alert("Ridht click happeneed.")
})

document.addEventListener("keydown",(e)=>{
    console.log(e);
})