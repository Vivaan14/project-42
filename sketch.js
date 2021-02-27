
function setup() {
createCanvas(800,400);
angleMode(DEGREES);
}

function draw() {
  background(0,0,0);
  translate(200,200)
  hr = hour();
mn = minute();
sc = second();
  scAngle = map(sc,0,60,0,360)
push()
rotate(scAngle)
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)
pop()
strokeWeight(10)
noFill()
stroke(255,0,0)
  arc(0,0,260,260,0,scAngle)

mnAngle = map(mn,0,60,0,360)
push()
rotate(mnAngle)
stroke(0,255,0)
strokeWeight(7)
line(0,0,100,0)
pop()
strokeWeight(10)
noFill()
stroke(0,255,0)
  arc(0,0,230,230,0,mnAngle)

  hrAngle = map(hr,0,60,0,360)
push()
rotate(hrAngle)
stroke(0,0,255)
strokeWeight(7)
line(0,0,100,0)
pop()
strokeWeight(10)
noFill()
stroke(0,0,255)
  arc(0,0,200,200,0,hrAngle)

}
