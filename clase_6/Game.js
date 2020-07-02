class Game {
  constructor(){
    this.space = null;
    this.cntrls = null;
  }
  start() {
    this.space = new Space()
    this.space.initCanvas('canvas')

    this.cntrls = new Controls()
    this.cntrls.configInit()
  }
}