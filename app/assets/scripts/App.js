var $ = require('jquery');
//var Person = require('./modules/Person.js'); the old way before ES6
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.")
  }
}

alert("ABC 123");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "green");
jane.greet();
jane.payTaxes();

$("h1").remove();
