class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png")
    this.trajectory = []
  }

  display() {
    if (this.body.position.x>200&&this.body.velocity.x>10) {
    var position = [this.body.position.x,this.body.position.y]
    this.trajectory.push(position)
    }
    for (var i = 0;i<this.trajectory.length;i++) {
      image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1])
    }
    super.display();
  }
}
