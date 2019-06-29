function SetPerson() {
    var person = {
        firstName: "",
        lastName: "",
        age: 0,
        fullName: function() {
            return this.firstName + " " + this.lastName
        }
    };

    person.firstName = document.getElementById('1001').value;
    person.lastName = document.getElementById('1002').value;
    person.age = document.getElementById('1003').value;

    document.write(person.fullName() +
    " is " + person.age + " years old.")
}