const active = document.querySelector(".shareactive");
const details = document.querySelector(".details");
const button = document.querySelector(".share-btn");
const btnactive = document.querySelector(".share-btn-active");
const deskactive = document.querySelector(".shareactive-desk");
const btnbackground = document.querySelector(".share");
if (window.innerWidth <= 480) {
  button.addEventListener("click", () => {
    if ((details.style.display = "flex")) {
      details.style.display = "none";
      active.style.display = "flex";
    }
  });
  btnactive.addEventListener("click", () => {
    if ((details.style.display = "none")) {
      details.style.display = "flex";
      active.style.display = "none";
    }
  });
} else {
// Desktop
btnbackground.addEventListener("click", ()=>{
    deskactive.classList.toggle("active");
    btnbackground.classList.toggle("btn-active");
    if(btnbackground.classList.contains("btn-active")){
    button.src = "images/icon-share-active.svg";
    }else{
        button.src = "images/icon-share.svg";
    }
})
};
