function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "resources/ajax_intro.html", true)
    // xhttp.open("GET", "js/scripts.js", true)
    xhttp.send()
}