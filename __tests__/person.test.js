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
});