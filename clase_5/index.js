var miStorage = window.localStorage;
var ctrl = {
  x: 0,
  y: 0,
}

var xRect = 10
var yRect = 0

const clickUp = () => {
  if(ctrl.y < 500) {
    ctrl.y++
    yRect = ctrl.y++
  }
}

const clickDwn = () => {
  if(ctrl.y >= 0) {
    ctrl.y--
    yRect = ctrl.y++
  }
  
}

window.onload = () => {
  var cnvs = document.getElementById('canvasGame')
  // var upBtn = document.getElementById('up')
  // var lftBtn = document.getElementById('lft')
  // var rghBtn = document.getElementById('rgh')
  // var dwnBtn = document.getElementById('dwn')

  

  var ctx = cnvs.getContext('2d')
  // cnvs.width = 800
  
  const clearRect = () => {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, cnvs.width, cnvs.height)
  }

  const dibujarRect = (x, y) => {
    ctx.fillStyle = 'black'
    ctx.fillRect(x, y, 50, 50)
  }

  setInterval(() => {
    miStorage.setItem('@pos_x', xRect);
    miStorage.setItem('@pos_y', yRect);

    let pos = {
      x: miStorage.getItem('@pos_x'),
      y: miStorage.getItem('@pos_y'),
    }
    // console.log(pos)
    clearRect()
    dibujarRect(xRect, yRect)
  }, 500)
}


