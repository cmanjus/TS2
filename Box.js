class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility = 255;
    this.width=width;
    this.height = height;
    //this.image = loadImage("sprites/wood1.png");
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility -=5;
      
      pop();

    }
  }
};
