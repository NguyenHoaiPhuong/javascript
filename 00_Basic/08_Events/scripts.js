var num = 0;

function showHideDate() {
    num++;
    if ((num % 2) == 0) {
        document.getElementById("1001").innerHTML="What date is it?"
        document.getElementById("1002").innerText="Click Me"
    } else {
        document.getElementById("1001").innerHTML=Date()
        document.getElementById("1002").innerText="Clear"
    }
}
