const menu = document.querySelector(".bx-menu");
const account = document.querySelector(".bxs-user-circle");

menu.addEventListener("click", ()=>{
    window.location.href = "pages/technician.html";
})

account.addEventListener("click", ()=>{
    window.location.href = "pages/admin.html";
})