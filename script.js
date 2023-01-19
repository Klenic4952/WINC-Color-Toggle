const colorGrey = document.querySelector(".grey-bg");
const colorRed = document.querySelector(".red-bg");
const colorOrange = document.querySelector(".orange-bg");
const colorPurple = document.querySelector(".purple-bg");
const colorGreen = document.querySelector(".green-bg");

toggleNavStatus = false;

let getMenu = document.getElementById("menu-toggle-nav");
let hideMenu = document.querySelector(".nav-main");

let toggleNav = function () {
let showMenu = document.querySelector(".nav-main ul");     
        if (toggleNavStatus === false) {
        showMenu.style.visibility = "visible";
            
        toggleNavStatus = true;

}   else if (toggleNavStatus === true) {
        showMenu.style.visibility = "hidden";

        toggleNavStatus = false;
}
}

getMenu.addEventListener("mouseover", toggleNav);
hideMenu.addEventListener("mouseleave", toggleNav);

const para = document.createElement("p");

colorGrey.addEventListener ("click", function () {
    let radBtn1 = document.getElementById("radioButton1");
    radBtn1.checked = true;
    para.innerText = "GREY";
    document.body.appendChild(para);
    body.style.backgroundColor = "lightgray";

    toggleNav();

})

colorRed.addEventListener ("click", function () {
    let radBtn2 = document.getElementById("radioButton2");
    radBtn2.checked = true;
    para.innerText = "RED";
    document.body.appendChild(para);
    document.body.style.backgroundColor = "red";

    toggleNav();
})

colorOrange.addEventListener ("click", function () {
    let radBtn3 = document.getElementById("radioButton3");
    radBtn3.checked = true;
    para.innerText = "ORANGE";
    document.body.appendChild(para);
    document.body.style.backgroundColor = "orange";

    toggleNav();
})

colorPurple.addEventListener ("click", function () {
    let radBtn4 = document.getElementById("radioButton4");
    radBtn4.checked = true;
    para.innerText = "PURPLE";
    document.body.appendChild(para);
    document.body.style.backgroundColor = "purple";

    toggleNav();
})

colorGreen.addEventListener ("click", function () {
    let radBtn5 = document.getElementById("radioButton5");
    radBtn5.checked = true;
    para.innerText = "GREEN";
    document.body.appendChild(para);
    document.body.style.backgroundColor = "green";

    toggleNav();
})

