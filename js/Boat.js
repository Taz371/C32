class Boat {
    constructor(x, y, width, height, boatPos, boatAnimation) {
      var options = {
        restitution:1,
        density:1,friction:1
      };
      this.image = loadImage("assets/boat.png")
      this.width = width;
      this.height = height;
      this.animation = boatAnimation;
      this.speed = 0.04;
      this.boatPosition = boatPos;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }

    animate()
    {
      this.speed += 0.05 % 1; 
    }

    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      var index = floor(this.speed % this.animation.length);

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.animation[index], 0, this.boatPosition, this.width, this.height);
      pop();
    }
  }