function convert(number,type) {
    let num = Number.parseFloat(number);
    if (type === 1) {
        let newNum = num / 30.50;
        document.getElementById("b").value = newNum;
    }
    else {
        let newNum = num * 30.50;
        document.getElementById("a").value = newNum;
    }
}
