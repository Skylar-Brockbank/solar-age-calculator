import $ from 'jQuery';
import {Person} from './../src/js/person.js';
import {Screen, Planet, SolarSystem} from './js/solarsystem.js';
import './css/styles.css';

function setOutput(person){
  let morbidMessage = '';
  let deathArray = [[person.toExpectedDeath,"Earth"],[person.toExpectedDeathMercury,"Mercury"],[person.toExpectedDeathVenus,"Venus"],[person.toExpectedDeathMars,"Mars"],[person.toExpectedDeathJupiter,"Jupiter"]];
  if(person.earthAge>person.lifeExpectancy){
    for(let i = 0; i<deathArray.length;i++){
      morbidMessage = morbidMessage+" Your expiration date was "+deathArray[i][0]+" years ago on "+deathArray[i][1];
    }
  }else{
    for(let i = 0; i<deathArray.length;i++){
      morbidMessage = morbidMessage+" Your expected expiration is in "+deathArray[i][0]+" years on "+deathArray[i][1];
    }
  }
  let output = " You may be "+person.earthAge+" on Earth, but you're "+person.mercuryAge+" on Mercury, "+person.venusAge+" on Venus, "+person.marsAge+" on Mars, and "+person.jupiterAge+" on Jupiter.";
  output = output + morbidMessage;
  return output;
}




var screen1 = new Screen('solar','stellar');
var testSystem = new SolarSystem(screen1, [(2*screen1.canvas.width/3),(screen1.canvas.height/3)]);
let j = testSystem.j;


function animate(){

  requestAnimationFrame(animate);
  screen1.con.clearRect(0,0,window.innerWidth,window.innerHeight);
  screen1.con.beginPath();
  screen1.con.fillStyle = 'rgb(255, 230, 0)';
  screen1.con.shadowBlur = 50;
  screen1.con.shadowColor = 'white';
  screen1.con.arc(sun[0],sun[1],50*j,0,Math.PI*2,false);
  screen1.con.fill();
  for(let f = 0; f<testSystem.planetSystem.length;f++){
    screen1.con.beginPath();
    screen1.con.strokeStyle = 'rgba(255, 255, 255, 5)';
    screen1.con.arc(testSystem.planetSystem[f].orbitPoint[0],testSystem.planetSystem[f].orbitPoint[1],testSystem.planetSystem[f].orbitRadius,0,Math.PI*2,false);
    screen1.con.stroke();
  }
  for(let f = 0; f<testSystem.planetSystem.length;f++){
    testSystem.planetSystem[f].update();
  }
  
}

let sun =[(2*screen1.canvas.width/3),(screen1.canvas.height/3)];
testSystem.addPlanet(new Planet("mercury",5*j,"rgb(255, 58, 9)",0.02,Math.random(),sun,100*j,screen1));
testSystem.addPlanet(new Planet("venus",9*j,"rgb(158, 211, 12)",0.01,Math.random(),sun,175*j,screen1));
testSystem.addPlanet(new Planet("earth",10*j,"#006aff",0.005,Math.random(),sun,300*j,screen1));
testSystem.addPlanet(new Planet("mars",8*j,"rgb(138, 37, 37)",0.0025,Math.random(),sun,500*j,screen1));
testSystem.addPlanet(new Planet("jupiter",20*j,"rgb(253, 179, 68)",0.0019,Math.random(),sun,700*j,screen1));
screen1.drawStars();
animate();

$('form').submit(function(event){
  event.preventDefault();
  let person1 = new Person($('#earthAge').val(),$('#earthDeath').val());
  $('#returnValues').text(setOutput(person1));
});