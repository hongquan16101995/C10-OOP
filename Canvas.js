//khởi tạo canvas
let ctx = document.getElementById("myCanvas").getContext("2d")
// //vẽ hình chữ nhật
// ctx.fillStyle = "#C60707FF"
// ctx.fillRect(200, 200, 300, 200)
//
//
// //vẽ hình tròn
// ctx.beginPath()
// ctx.arc(100, 100, 150, 0, Math.PI * 2)
// ctx.fill()
// ctx.closePath()

//vẽ ảnh
let image = document.getElementById("img")
ctx.drawImage(image, 0, 0, 500, 300)