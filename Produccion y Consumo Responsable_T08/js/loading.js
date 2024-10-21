window.addEventListener("DOMContentLoaded", () =>{
    onLoader();
})
window.addEventListener("load", () =>{
    setTimeout(()=>{
        hideLoader();
    }, 2000)
})

const loader = document.getElementById("loadingPrincipal");

const onLoader = ()=>{
    loader.style.display = "flex";
}
const hideLoader = ()=>{
    
    loader.style.display = "none";
}