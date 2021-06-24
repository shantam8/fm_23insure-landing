let mobileMenuIcon = document.querySelector(".mobileMenuSvg");
let body = document.querySelector("body");
let header = document.querySelector("header");


function toggleMobileMenu(){
    if(body.classList.contains("openMenu")){
        console.log("closing");
        body.classList.remove("openMenu");
        header.classList.remove("mobileMenu");

    }else{
        console.log("opening");
        body.classList.add("openMenu");
        header.classList.add("mobileMenu");
        console.log(header);
    }
}


function init(){
    console.log("hi");

    mobileMenuIcon.addEventListener("click", toggleMobileMenu);

}





window.onload = init();