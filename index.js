const hamburger = document.querySelector(".nav-hamburger")
const navbar = document.querySelector(".nav-content")
const closeBtn = document.querySelector(".close-btn")
const shadow = document.querySelector(".shadow-layer")

const featureBtn = document.querySelector("#features")
const featureList = document.querySelector("#feature-list")

const companyBtn = document.querySelector("#company")
const companyList = document.querySelector("#company-list")

const arrowUp = document.querySelectorAll(".up");
const arrowDown = document.querySelectorAll(".down");

const arrow = document.querySelectorAll(".arrow")

hamburger.addEventListener("click", event => {
    navbar.classList.add("nav-show")
    shadow.classList.add("shadow-show")
})

closeBtn.addEventListener("click", event => {
    shadow.classList.remove("shadow-show")
    navbar.classList.remove("nav-show")
})


featureBtn.addEventListener("click", event => {
    featureList.classList.toggle("hide")
})

companyBtn.addEventListener("click", event => {
    companyList.classList.toggle("hide")
})

featureBtn.addEventListener("click", event => {
       arrow[0].classList.toggle("hide")
       arrow[1].classList.toggle("hide")

    })

companyBtn.addEventListener("click", event => {
        arrow[2].classList.toggle("hide")
        arrow[3].classList.toggle("hide")
 
     })
 


