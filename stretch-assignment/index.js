let window = document.querySelector("window");
console.log("hello");
window.addEventListener('scroll', () => {
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;
    if (Math.ceil(scrolled) === scrollable){
        alert("That's all folks!");
    }
})