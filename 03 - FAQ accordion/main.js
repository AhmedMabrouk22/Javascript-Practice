<<<<<<< HEAD
let items = document.querySelectorAll(".container .content ul .box");
function makeActive() {
    this.classList.toggle("active");
}

for (let i = 0 ; i < items.length; ++i) {
    items[i].addEventListener("click",makeActive);
}

=======
let items = document.querySelectorAll(".container .content ul .box");
function makeActive() {
    this.classList.toggle("active");
}

for (let i = 0 ; i < items.length; ++i) {
    items[i].addEventListener("click",makeActive);
}

>>>>>>> 83548a42b3e7bc42db46f76bb8aea87fd3ce7df4
