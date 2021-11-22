let rec = new Rectangle(100, 100, "green")
let circle = new Circle(100, "red")
let ctx = document.getElementById("canvas").getContext("2d")
console.log(circle.getRadius())
console.log(circle.getArea())
circle.draw(ctx)

rec.draw(ctx)