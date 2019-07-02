function AnimalSelect() {
    var elems = document.getElementsByName("animal")
    var str = "You love "
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].checked) {
            str += elems[i].value + ", "
        }
    }
    if (str.lastIndexOf(",") > 0) {
        str = str.slice(0, str.length - 2)
    }
    document.getElementById('1002').value = str
}