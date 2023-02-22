let qoutes = [ {
    qoute  : "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    person : "Winston S. Churchill"},
    {
        qoute  : "It is better to fail in originality than to succeed in imitation.",
        person : "Herman Melville"
    },
    {
        qoute  : "The road to success and the road to failure are almost exactly the same.",
        person : "Colin R. Davis"
    },
    {
        qoute  : "Success usually comes to those who are too busy to be looking for it.",
        person : "Henry David Thoreau"
    },
    {
        qoute  : "Opportunities don't happen. You create them.",
        person : "Chris Grosser"
    },
    {
        qoute  : "Don't be afraid to give up the good to go for the great.",
        person : "John D. Rockefeller"
    },
    {
        qoute  : "I find that the harder I work, the more luck I seem to have.",
        person : "Thomas Jefferson"
    },
    {
        qoute  : "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
        person : "Ray Goforth"
    },
    {
        qoute  : "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
        person : "Jim Rohn"
    },
    {
        qoute  : "Try not to become a man of success. Rather become a man of value.",
        person : "Albert Einstein"
    },
    {
        qoute  : "Never give in except to convictions of honor and good sense.",
        person : "Winston Churchill"
    },
    {
        qoute  : "Stop chasing the money and start chasing the passion.",
        person : "Tony Hsieh"
    },
    {
        qoute  : "Success is walking from failure to failure with no loss of enthusiasm.",
        person : "Winston Churchill"
    },
    {
        qoute  : "I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.",
        person : "G. K. Chesterton"
    },
        
]
let copyBtn = document.querySelector(".copy");
let nextBtn = document.querySelector(".new-qoute");
let mesaageBox = document.querySelector(".copy-message");
let closeBtn = mesaageBox.firstElementChild;

function getQoute() {
    let idx= Math.floor(Math.random() * qoutes.length);
    return qoutes[idx];
}

function setQoute() {
    let qoute = document.getElementsByClassName("qoute");
    let person = document.getElementsByClassName("person");
    let newQoute = getQoute();
    qoute[0].textContent = newQoute.qoute;
    person[0].textContent = newQoute.person;
}

function copyMessage() {
    let text = document.querySelector(".container .content .text .qoute").textContent;
    let textTemp = document.createTextNode(text);
    let temp = document.createElement("textarea");
    temp.appendChild(textTemp);
    temp.select();
    temp.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(temp.value);
    viewMessage();
}

function viewMessage() {
    mesaageBox.style.display = "block";
}

function closeMessage() {
    mesaageBox.style.display = "none";
}

window.onload = setQoute();
nextBtn.addEventListener("click",setQoute);
copyBtn.addEventListener("click",copyMessage);
closeBtn.addEventListener("click",closeMessage);
window.addEventListener("click",function(e) {
    if (mesaageBox.style.display === "block")
        mesaageBox.style.display = "none";
},true);
