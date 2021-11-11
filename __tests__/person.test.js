import {Person} from "./../src/js/person.js";

describe('Person', ()=> {
  test('should create an instance of the person object with values for each planet age',()=>{
    let person1 = new Person(25);
    expect(person1.earthAge).toBeDefined();
    expect(person1.mercuryAge).toBeDefined();
    expect(person1.venusAge).toBeDefined();
    expect(person1.marsAge).toBeDefined();
    expect(person1.jupiterAge).toBeDefined();
  });
  test('should assign proportionally correct values to each planet years variable',()=>{
    let person1 = new Person(25);
    expect(person1.earthAge).toEqual(25);
    expect(person1.mercuryAge).toEqual(104.1);
    expect(person1.venusAge).toEqual(40.3);
    expect(person1.marsAge).toEqual(13.2);
    expect(person1.jupiterAge).toEqual(2.1);
  });
  test('should calculate the absolute value of the users life expectancy-age',()=>{
    let person1 = new Person(25,80);
    expect(person1.earthAge).toEqual(25);
    expect(person1.mercuryAge).toEqual(104.1);
    expect(person1.venusAge).toEqual(40.3);
    expect(person1.marsAge).toEqual(13.2);
    expect(person1.jupiterAge).toEqual(2.1);
    expect(person1.toExpectedDeath).toEqual(55);
  });
  test('should calculate the absolute value of the users life expectancy-age and store a value for all planets',()=>{
    let person1 = new Person(25,80);
    expect(person1.earthAge).toEqual(25);
    expect(person1.mercuryAge).toEqual(104.1);
    expect(person1.venusAge).toEqual(40.3);
    expect(person1.marsAge).toEqual(13.2);
    expect(person1.jupiterAge).toEqual(2.1);
    expect(person1.toExpectedDeath).toEqual(55);
    expect(person1.toExpectedDeathMercury).toEqual(229.1);
    expect(person1.toExpectedDeathVenus).toEqual(88.7);
    expect(person1.toExpectedDeathMars).toEqual(29.2);
    expect(person1.toExpectedDeathJupiter).toEqual(4.6);
  });
});