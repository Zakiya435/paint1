var draws=[];
var currentPath=[];
function setup() {
  canvas = createCanvas(1000, 600);
  var clear = createButton('clear');
  clear.position(900,100);
  canvas.mousePressed(start);
}

function draw()
{
  background(230,230,230);

  if(mouseIsPressed){
    var pos = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(pos);
  }
  
  strokeWeight(7);
  noFill();
  stroke("black");
 
  for(var i=0; i < draws.length;i++)
  {
    var path = draws[i];
    beginShape();
    for(var j=0;j<path.length;j++)
    {
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }

}
function start()
{
  currentPath=[];
  draws.push(currentPath);
}
function clear()
{
  if(clear.mousePressed)
  {
    draws=[];
  }
}
