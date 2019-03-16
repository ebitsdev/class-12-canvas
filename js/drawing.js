function draw() {
    let canvas = document.getElementById('demo')
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d")
        ctx.fillStyle = 'goldenrod';
        ctx.fillRect(0, 0, 150, 150)

        ctx.fillStyle = 'olive'
        ctx.fillRect(50, 50, 150, 150)
        ctx.fillStyle = 'rgba(100, 10, 10, 0.4)'
        ctx.beginPath()
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
        ctx.moveTo(110, 75)
        ctx.arc(75, 75, 35, 0, Math.PI * 2, false)
        ctx.moveTo(65, 65)
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true)
        ctx.moveTo(95, 65)
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true)
        ctx.stroke()
    }
}