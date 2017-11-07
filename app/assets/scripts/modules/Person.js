function Person(name, favColor) {
  this.name = name;
  this.favColor = favColor;
  this.greet = function() {
    console.log("Hello there");
  }
}

module.exports = Person;
