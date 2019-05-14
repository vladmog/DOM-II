// Your code goes here

//======================================================

//Scroll to bottom of page: that's all folks

window.addEventListener('scroll', () => {
    let scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;
    if (Math.ceil(scrolled) === scrollMax){
        alert("That's all folks!");
    }
})
//=====================================================

//Make things disappear on double click
const website = document.querySelector('body');
website.addEventListener('dblclick', e => {
    e.target.style.display = "none";
})

//=======================================================

//Border on mouseover

const imgs = document.querySelectorAll("img");
imgs.forEach(function(element){
element.addEventListener('mouseover', e => {
        console.log("You resized");
        console.log(e)
        element.style.border = "solid black 10px";
    })
})

//=======================================================


website.addEventListener('keydown', (e) => {
    console.log("key log");
    e.target.style.backgroundColor = "red";
})

//=======================================================

website.addEventListener('keyup', (e) => {
    console.log("key log");
    e.target.style.backgroundColor = "white";
})

//======================================================

