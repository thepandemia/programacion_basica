window.onload = () => {
  var cnvs = document.getElementById('canvasGame')
  var ctx = cnvs.getContext('2d')
  // cnvs.width = 800
  var xRect = 0
  var yRect = 0
  
  const clearRect = () => {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, cnvs.width, cnvs.height)
  }

  const dibujarRect = (x, y) => {
    ctx.fillStyle = 'black'
    ctx.fillRect(x, y, 50, 50)
  }

  setInterval(() => {
    clearRect()
    dibujarRect(xRect++, yRect++)
  }, 500)
}


