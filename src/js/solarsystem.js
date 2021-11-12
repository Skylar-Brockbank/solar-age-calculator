export class Screen{
  constructor(systemCanvas,starCanvas){
    this.canvas = document.getElementById(systemCanvas);
    this.starField = document.getElementById(starCanvas);
    this.con = this.canvas.getContext('2d');
    this.starCon = this.starField.getContext('2d');
    this.starField.width = window.innerWidth;
    this.starField.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  drawStars(){
    for(let i =0;i<100;i++){
      let x = Math.random()*this.starField.width;
      let y = Math.random()*this.starField.height;
      let radius = 0.1+(Math.random()*3);
      this.starCon.beginPath();
      this.starCon.fillStyle = 'rgba(177, 177, 177, 0.863)';
      this.starCon.arc(x,y,radius,0,Math.PI*2,false);
      this.starCon.fill();
    }
  }
}

//end set-up stuff


export class Planet{
  constructor(name,radius,color,speed,srad,orbitPoint,orbitRadius,screen){
    this.name = name;
    this.color = color;
    this.radius = radius;
    this.x = 0;
    this.y = 0;
    this.speed = speed;
    this.orbitPoint = orbitPoint;
    this.orbitRadius = orbitRadius;
    this.rad = srad;
    this.screen = screen;
  }
  draw(){
    this.screen.con.fillStyle = this.color;
    this.screen.con.beginPath();
    this.screen.con.arc(this.x, this.y, this.radius, 0, Math.PI*2,false);
    this.screen.con.fill();
  }
  update(){
    this.rad += this.speed;
    this.x = this.orbitPoint[0] + (Math.cos(this.rad)*this.orbitRadius);
    this.y = this.orbitPoint[1] + (Math.sin(this.rad)*this.orbitRadius);

    this.draw();
  }
}

export class SolarSystem{
  constructor(screen,center){
    this.planetSystem = [];
    this.j = screen.canvas.height/600;
    this.center = center;
    this.screen = screen;
  }
  addPlanet(planet){
    this.planetSystem.push(planet);
  }
  start(){
    window.addEventListener('resize', function(){
      this.screen.canvas.width = window.innerWidth;
      this.screen.canvas.height = window.innerHeight;
    });
  }
}