//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
String.prototype.myReverse = function () {
    var str = this;
    str = this.split('');
    for (var i = 0; i < this.length / 2; i++) {
        var temp = str[i];
        str[i] = str[str.length - 1 - i];
        str[str.length - 1 - i] = temp;
    }
    str = str.join('');
    return str;
}
