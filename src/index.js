import $ from 'jQuery';
import {Person} from './../src/js/person.js';

function setOutput(person){
  let morbidMessage = '';
  let deathArray = [[person.toExpectedDeath,"Earth"],[person.toExpectedDeathMercury,"Mercury"],[person.toExpectedDeathVenus,"Venus"],[person.toExpectedDeathMars,"Mars"],[person.toExpectedDeathJupiter,"Jupiter"]];
  if(person.earthAge>person.lifeExpectancy){
    for(let i = 0; i<deathArray.length;i++){
      morbidMessage = morbidMessage+" Your expiration date was "+deathArray[i][0]+" years ago on "+deathArray[i][1];
    }
  }else{
    for(let i = 0; i<deathArray.length;i++){
      morbidMessage = morbidMessage+"Your expiration is in "+deathArray[i][0]+" years on "+deathArray[i][1];
    }
  }
  let output = " You may be "+person.earthAge+" on Earth, but you're "+person.mercuryAge+" on Mercury, "+person.venusAge+" on Venus, "+person.marsAge+" on Mars, and "+person.jupiterAge+" on Jupiter.";
  output = output + morbidMessage;
  return output;
}

$('form').submit(function(event){
  event.preventDefault();
  let person1 = new Person($('#earthAge').val(),$('#earthDeath').val());
  $('#returnValues').text(setOutput(person1));
});