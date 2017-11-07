var $ = require('jquery');
var Person = require('./modules/Person.js');

var john = new Person("John Doe", blue);
john.greet();

$("h1").remove();
