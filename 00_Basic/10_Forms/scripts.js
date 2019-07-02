function validateForm() {
    var form = document.forms['fSubmit']
    if (form['tName'].value == "") {
        alert("Name must be filled out")
        return false
    }
    return true
}