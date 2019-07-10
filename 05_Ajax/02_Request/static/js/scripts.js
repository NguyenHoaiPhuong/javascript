function ajaxGet() {
    let xhtml = new XMLHttpRequest();
    xhtml.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let user = JSON.parse(this.responseText)
            document.getElementById("1001").value = user.Name
            document.getElementById("1002").value = user.Password
        }
    }
    xhtml.open("GET", "/login")
    xhtml.send()
}

function ajaxPost() {
    let xhtml = new XMLHttpRequest();
    xhtml.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let url = this.responseURL.toString();
            let win = window.open(url, "_blank");
            win.alert(this.responseText)
        }
    }
    xhtml.open("POST", "/login");
    xhtml.send(FormData);
}