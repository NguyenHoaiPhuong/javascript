function varDeclare() {
    let x = 1
    {
        let x = 10
        const y = 5
        alert("x inside block: " + x.toString() +
        ", y inside block: " + y.toString())
    }
    alert("x outside block: " + x.toString())
}

const multiply = () => {
    let strX = document.getElementById("1001").value;
    let strY = document.getElementById("1002").value;
    x = parseFloat(strX);
    y = parseFloat(strY);
    if (isNaN(x) || isNaN(y)) {
        alert("Inputs must be float numbers");
    }
    z = x*y;
    document.getElementById("1003").value = z.toString()
}

class Car {
    constructor(brand) {
        this.brand = brand
    }

    print() {
        alert("Car " + this.brand)
    }
}

const checkCar = () => {
    let brand = document.getElementById("1004").value        
    let newCar = new Car(brand)
    newCar.print()
}