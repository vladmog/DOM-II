// Your code goes here

//======================================================
//1
//Scroll to bottom of page: that's all folks

window.addEventListener('scroll', () => {
    let scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;
    if (Math.ceil(scrolled) === scrollMax){
        alert("That's all folks!");
    }
})
//=====================================================
//2
//Make things disappear on double click
const website = document.querySelector('body');
website.addEventListener('dblclick', e => {
    e.target.style.display = "none";
})

//=======================================================
//3
//Border on mouseover

const imgs = document.querySelectorAll("img");
imgs.forEach(function(element){
element.addEventListener('mouseover', e => {
        element.style.border = "solid black 10px";
    })
})

//=======================================================
//4
//Make background red on key down

website.addEventListener('keydown', (e) => {
    console.log("key log");
    e.target.style.backgroundColor = "red";
})

//=======================================================
//5
//Return background to white on key up

website.addEventListener('keyup', (e) => {
    console.log("key log");
    e.target.style.backgroundColor = "white";
})

//======================================================
//6
//Alert on right click

website.addEventListener('contextmenu', e => {
    alert("OH HE'S ABOUT TO GO INTO DEV MODE!!!");
})

//=======================================================
//7
//Borders on single click
//stopPropagation()

let mainDiv = document.querySelector(".inverse-content");
mainDiv.addEventListener('click', e => {
    e.currentTarget.style.border = "solid yellow 5px";
})


let subDiv = document.querySelector(".inverse-content .text-content");
subDiv.addEventListener('click', e => {
    e.stopPropagation();
    e.currentTarget.style.border = "solid orange 5px";
})

//========================================================
//8
//Page load
window.addEventListener('load', e => {
    alert("Page hath loaded");
})

//========================================================
//9
//Resize window alert
window.addEventListener('resize', e => {
    console.log("Resize");
    alert("ANOTHER ANNOYING ALERT: Please don't resize, this page was designed to be fixed!")
})

//========================================================
//10
//Copy alert
window.addEventListener('copy', e => {
    alert("Oh he can copy and paste too wooooow");
})

//========================================================

//preventDefault on Nav

let anchors = document.querySelectorAll("a");
anchors.forEach(function(element){
    element.addEventListener('click', e => {
            e.preventDefault();
        })
    })

