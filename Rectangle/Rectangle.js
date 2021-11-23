class Rectangle {
    width
    height
    color

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    setColor(color) {
        this.color = color
    }

    draw() {
        let ctx = document.getElementById("myCanvas").getContext("2d")
        ctx.fillStyle = this.color
        ctx.fillRect(100, 100, this.width, this.height)
    }
}

let rec = new Rectangle(200, 100)
rec.draw()