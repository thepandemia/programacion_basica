class Space {
  constructor() {
    // super()
    this.ancho = 0;
    this.alto = 0;
    this.canvas = null;
    this.ctx = null;
  }

  initCanvas(el) {
    this.canvas = $(el)
    this.ctx = this.canvas.getContext('2d')
  }
}

