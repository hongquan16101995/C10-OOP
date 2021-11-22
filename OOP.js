//khởi tạo class với function
function Car(name, brand, type) {
    this.name = name
    this.brand = brand
    this.type = type

    this.getName = function () {
        return this.name
    }

    this.setName = function (nameSet) {
        this.name = nameSet
    }

    this.run = function () {
        alert("Đang chạy")
    }
}

//khởi tạo class với cú pháp JS ES6
class Car1 {
    name
    brand
    type

    constructor(name, brand, type) {
        this.name = name
        this.brand = brand
        this.type = type
    }

    getName() {
        return this.name
    }

    setName(nameSet) {
        this.name = nameSet
    }

    run(speed) {
        alert(speed)
    }
}

//khởi tạo 1 đối tượng và truy xuất thuộc tính + phương thức
let car2 = new Car1("C200", "Mercedes", "Sedan")
console.log(car2.name)
console.log(car2.getName())
console.log(car2.brand)
// let car3 = new Car1("GLC-350", "Mercedes", "Sedan")
car2.setName("GLC-350")
console.log(car2.name)
console.log(car2.getName())
car2.run(20)
car2.run(100)