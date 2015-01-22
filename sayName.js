//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function (name, age) {
    this.name = name;
    this.age = age;
};
    

//Now create three instances of Person with data you make up

  //code here
var me = new Person('daniel', 26);
var brian = new Person('brian', 27);
var stephen = new Person('stephen', 28);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function() {
    alert('hello ' + this.name);
};