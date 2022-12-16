const navbarEl = document.querySelector('nav')

const bottomContainer = document.querySelector('.bottom-container')



console.log(navbarEl)
window.addEventListener("scroll",()=>{
    if (window.scrollY > bottomContainer.offsetTop - navbarEl.offsetHeight - 50 ){
        navbarEl.classList.add("active")
    } else{
        navbarEl.classList.remove("active")
    }
})