class Bob {
    constructor(x, y) {
      var options = {
        isStatic:false,
        friction:0.4,
        density:3,
       restitution:1.2,
      }
      this.body = Bodies.circle(x, y,25,options);
    this.radius=5;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    ellipseMode(RADIUS);

      fill("red");
      ellipse(0, 0,this.radius*2,this.radius*2);
      pop();
    }
  };