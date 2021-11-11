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
    expect(person1.mercuryAge).toEqual(6);
    expect(person1.venusAge).toEqual(15.5);
    expect(person1.marsAge).toEqual(47);
    expect(person1.jupiterAge).toEqual(296.5);
  });
});