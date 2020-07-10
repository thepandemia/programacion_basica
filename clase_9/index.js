const SerialPort = require('serialport')
const port = new SerialPort('/dev/cu.usbmodem14101', {
  baudRate: 9600
})

port.on('readable', function(){
  console.log('Data', `${port.read()}`)
})

port.on('data', function(data) {
  console.log('Data es: ', `${data}`)
})