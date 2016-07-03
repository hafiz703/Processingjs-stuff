var angle;
var factor;
var count;
var anitype;
var treeType;
var bright;
function setup() {
  createCanvas(1380,500)
  sliderAngle = createSlider(0,TWO_PI,PI/4,0.01)
  sliderAnim = createSlider(1,20,1,1);
  sliderTreeType = createSlider(0,2,0,1);
  sliderBrightness = createSlider(1,20,10,0.01)
  factor = 0.67;
  count=0;
}

function draw() {
  background(0)  
  translate(width/2,height)
  angle = sliderAngle.value();
  anitype=sliderAnim.value();
  treeType = sliderTreeType.value();
  bright = sliderBrightness.value();
  
  branch(150);
  
}


function branch(len){
  count++;
  stroke(len*random(bright),len*random(bright),len*random(bright));
  strokeWeight(len/10)
  if(count%anitype===0){
    if(treeType===0)line(0,0,0,-len)
    else if (treeType===1)rect(0,0,0,-len)
    else{
      ellipse(0,0,0,-len)
    }
  }
  //else{ellipse(0,0,0,-len)}
  
  translate(0,-len)
  if(len>4){
    push()
    rotate(angle);
    branch(len*factor)
    pop()
    push()
    rotate(-angle);
    branch(len*factor)
    pop()

    // push()
    // branch(len*factor)
    // pop()

  }
}