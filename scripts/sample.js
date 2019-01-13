'use strict';

function helloWorld() {
    console.log(add.apply(null, [5,13,17]));
    console.log(anonymousAdd.apply(null, [4,5,6]));
    console.log(anonymousAdd(5,6,789));

    // Example of an anonymous function hiding "b".
    // Why on earth would you want to do this???
    let a = 1;
    let b = 2;

    (function() {
        let b = 3;
        a += b;
    })();

    console.log("A: " + a);
    console.log("B: " + b);

    let charsInBody = (function counter(elm) {
        if (elm.nodeType === 3) { // TEXT_NODE
            return elm.nodeValue.length;
        }
        let count = 0;
        for (let i = 0; elm.childNodes[i]; i++) {
            count += counter(elm.childNodes[i]);
        }
        return count;
    })(document.body);
    console.log(charsInBody);

    function lastNameFirst() {
        return this.lastName + " " + this.firstName;
    }

    let person = new Person("Leon", "Liefting");
    console.log(person.fullName());
    console.log(lastNameFirst.call(person));

    let x = makeAdder(5);
    let y = makeAdder(20);
    console.log(x(6));
    console.log(y(7))
}

function makeAdder(a) {
    return function(b) {
        return a + b;
    }
}

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

function add(... args) {
    let sum = 0;
    for (const value of args) {
        sum += value
    }
    console.log("Number of arguments passed to add function: " + arguments.length);
    return sum;
}

let anonymousAdd = function(... args) {
    let sum = 0;
    for (const value of args) {
        sum += value
    }
    console.log("Number of arguments passed to add function: " + arguments.length);
    return sum;
};

function makePerson(first, last) {
    return {
        first: first,
        last: last,
        fullName: function () {
            return this.first + ' ' + this.last;
        }
    };
}