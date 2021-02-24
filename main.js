const active = document.querySelector(".shareactive");
const details = document.querySelector(".details");
const button = document.querySelector(".share-btn");
const btnactive = document.querySelector(".share-btn-active");
button.addEventListener("click", ()=>{
    if(details.style.display = "flex"){
        details.style.display = "none";
        active.style.display = "flex";
    }
});
btnactive.addEventListener("click", ()=>{
    if(details.style.display = "none"){
        details.style.display = "flex";
        active.style.display = "none";
    }
});
