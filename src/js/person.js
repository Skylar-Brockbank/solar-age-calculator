export class Person{
  constructor(earthAge,lifeExpectancy){
    this.earthAge = earthAge;
    this.mercuryAge = this.convertAge(earthAge,"mercury");
    this.venusAge = this.convertAge(earthAge,"venus");
    this.marsAge = this.convertAge(earthAge,"mars");
    this.jupiterAge = this.convertAge(earthAge,"jupiter");
    this.lifeExpectancy = lifeExpectancy;
    this.toExpectedDeath = Math.abs(earthAge-lifeExpectancy);
    this.toExpectedDeathMercury = this.convertAge(this.toExpectedDeath,"mercury");
    this.toExpectedDeathVenus = this.convertAge(this.toExpectedDeath,"venus");
    this.toExpectedDeathMars = this.convertAge(this.toExpectedDeath,"mars");
    this.toExpectedDeathJupiter = this.convertAge(this.toExpectedDeath,"jupiter");
  }
  convertAge(age,planet){
    let planetConversionFactor = {
      "mercury":0.24,
      "venus":0.62,
      "mars":1.88,
      "jupiter":11.86
    };
    return (Math.trunc((age/planetConversionFactor[planet])*10)/10);
  }
}