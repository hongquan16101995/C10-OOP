class Circle {
    radius
    color

    constructor(radius, color) {
        this.radius = radius
        this.color = color
    }

    getRadius() {
        return this.radius
    }

    setRadius(radius) {
        this.radius = radius
    }

    getArea() {
        return this.radius ** 2 * Math.PI
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(200, 200, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }
}