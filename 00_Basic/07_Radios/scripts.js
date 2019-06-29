function GetInfo() {
    var person = {
        name: "",
        sex: ""
    }

    person.name = document.getElementById("1001").value;
    var sex = document.getElementsByName("sex");
    if (sex[0].checked) {
        person.sex = sex[0].value
        alert(person.name + " is a " + person.sex)
    } else if (sex[1].checked) {
        person.sex = sex[1].value
        alert(person.name + " is a " + person.sex)
    }
}