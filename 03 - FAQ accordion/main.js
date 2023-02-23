let items = document.querySelectorAll(".container .content ul .box");
function makeActive() {
    this.classList.toggle("active");
}

for (let i = 0 ; i < items.length; ++i) {
    items[i].addEventListener("click",makeActive);
}

