export function Person(earthAge){
  this.earthAge = earthAge;
  this.mercuryAge = earthAge*0.24;
  this.venusAge = earthAge*0.62;
  this.marsAge = earthAge*1.88;
  this.jupiterAge = earthAge*11.86;
}