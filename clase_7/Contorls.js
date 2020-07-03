class Controls {
  constructor() {
    this.up = null;
    this.lft = null;
    this.rgh = null;
    this.dwn = null;
    this.configBtn = 1
  }

  configInit() {
    switch (this.configBtn) {
      case 1:
        this.btnsConfig()
        break
      case 2:
        this.keyBrConfigArrow()
        break
      case 3:
        this.keyBrConfigAWSD()
        break
      default:
        break
    }
    // if(this.configBtn === 1) this.btnsConfig()
    // if(this.configBtn === 2) this.keyBrConfigArrow()
    // if(this.configBtn === 3) this.keyBrConfigAWSD()
  }

  btnsConfig() {
    this.up = $('up');
    this.lft = $('lft');
    this.rgh = $('rgh');
    this.dwn = $('dwn');
  }

  keyBrConfigArrow() {
    // this.up = $('up');
    // this.lft = $('lft');
    // this.rgh = $('rgh');
    // this.dwn = $('dwn');
  }

  keyBrConfigAWSD() {
    // this.up = $('up');
    // this.lft = $('lft');
    // this.rgh = $('rgh');
    // this.dwn = $('dwn');
  }
}

