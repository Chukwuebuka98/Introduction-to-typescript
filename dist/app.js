"use strict";
// type AddFn = (a: number, b: number) => number
var add;
add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(1, 2));
var Person = /** @class */ (function () {
    function Person(n, age, address) {
        this.name = n;
        this.age = age;
        this.address = address;
    }
    Person.prototype.greet = function (phrase) {
        console.log("Hello " + user1.name + " " + phrase);
    };
    return Person;
}());
var user1;
user1 = new Person("Emmanuel", 27, "3 Ezekwesili Cresent, Enugu");
user1.greet("we welcome you with Jesus joy");
