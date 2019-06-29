function SelectAnimal() {
    var select = document.getElementById('selection').value;
    switch (select) {
        case "Dog":
            document.getElementById('image').src="dog.jpg";
            break;
        case "Cat":
            document.getElementById('image').src="cat.jpg";
            break;
        case "Bird":
            document.getElementById('image').src="bird.jpg";
            break;
    }
}