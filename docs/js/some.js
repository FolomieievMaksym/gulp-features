let num = 10;
let str = 'string';
let stri = `string ${num}`;
let bool = true;
let nul = null;
let undef = undefined;
let obj = {};
let strings = ['str1', 'str2'];
let nums = [1, 2];
let some = [1, 2, 3, 4, 5];
let something = [1, 'string'];
let anything = 1;
anything = 'string';
anything = {};
let myNum = 10;
let myStr = 'string';
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Thirsday"] = 2] = "Thirsday";
})(Days || (Days = {}));
console.log(Days.Monday); // Вывод => 0
var Months;
(function (Months) {
    Months["September"] = "My Birthday";
    Months["Ocotober"] = "My Daughter Brithday";
    Months[Months["November"] = 11] = "November";
})(Months || (Months = {}));
console.log(Months.September); // Вывод => 'My Birthday'
function infinite() {
    while (true) {
        console.log('infinite func');
    }
}
class Square {
    constructor(color // тоже самое что указать в {this.color: string = color}
    ) {
        this.id = 1;
    }
}
let someSquare = new Square('blue');
class Animal {
    constructor() {
        this.voice = '';
        this.color = 'black';
    }
    go() {
        console.log('Go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
let someCat = new Cat();
someCat.setVoice('meow');
