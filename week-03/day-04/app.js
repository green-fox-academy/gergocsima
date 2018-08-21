var Greeter = (function () {

  function Greeter() {

      this.fact = 1;

  }

  Greeter.fact = 0;

  Greeter.prototype.factorial = function (num) {

      if(num > 0) {

          this.fact = this.fact * num;

          this.factorial(num - 1);

      }

      return this.fact;

  };

  return Greeter;

})();


window.onload = function () {

  var fact;

  var num;

  num = parseInt(prompt("Enter a number"));

  var greeter = new Greeter();

  fact = greeter.factorial(num);

  alert("Factorial of a number is->" + fact);

};