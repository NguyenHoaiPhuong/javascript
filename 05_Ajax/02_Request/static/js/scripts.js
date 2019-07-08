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