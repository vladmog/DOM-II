// Your code goes here


//Scroll to bottom of page: that's all folks
window.addEventListener('scroll', () => {
    let scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;
    if (Math.ceil(scrolled) === scrollMax){
        alert("That's all folks!");
    }
})

//Make things disappear on double click
const website = document.querySelector('body');
website.addEventListener('dblclick', e => {
    e.target.style.display = "none";
})

