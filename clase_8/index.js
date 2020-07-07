function $(el) {
  return document.getElementById(el)
}
window.onload = function(){
  // var Component = new Components();
  let arrLineas = [];
  var line = new Line({
    x: 10,
    y: 10,
    xx: 100,
    yy: 100,
  });
  line.color = 'blue';
  var line2 = new Line({});

  line.name = 'Linea 1';

  arrLineas.push(line)
  arrLineas.push(line2)
  console.log(arrLineas)
}






