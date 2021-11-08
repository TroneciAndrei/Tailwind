const btn = document.querySelector("button.mobile-menu-button");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu-nav");
const goTop = document.getElementById("gotop");
btn.addEventListener("click", () =>{
    menu.classList.toggle("-translate-x-full");
    btn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
})
closeBtn.addEventListener("click", () =>{
    menu.classList.toggle("-translate-x-full");
    btn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
})
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        goTop.style.display = "block";
      } else {
        goTop.style.display = "none";
      }
    }

goTop.addEventListener("click", ()=>{
   document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})