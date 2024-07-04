console.log("hello");
setTimeout(() => {
    
    console.log("worls");
}, 4000);
console.log("bye");

const callback=(arg) => {
  console.log(arg);
}


const loadSRC=(src,callback) => {
  let sc=document.createElement("script");
  sc.src=src;
  sc.onload=callback("Nirmit")
  document.head.append(sc)
}
loadSRC("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)