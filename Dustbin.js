class Dustbin{
    constructor(x, y, width, height,angle) {
      var options = {
          'restitution':0.3,
          'friction':20.0,
          'density':5.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER)
      fill("white")
     rect(0,0, this.width, this.height);
      pop();
    }
  };
  