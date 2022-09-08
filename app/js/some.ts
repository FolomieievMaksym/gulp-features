let num: number = 10;
let str: string = 'string';
let stri: string = `string ${num}`;
let bool: boolean = true;
let nul: null = null;
let undef: undefined = undefined;
let obj: object = {}
let strings: string[] = ['str1', 'str2']
let nums: number[] = [1, 2]
let some: Array<number> = [1, 2, 3, 4, 5]
let something: [number, string] = [1, 'string']
let anything: any = 1;
anything = 'string'
anything = {}
type MyType = string | number
let myNum: MyType = 10
let myStr: MyType = 'string'
enum Days {
	Monday,
	Tuesday,
	Thirsday
}
console.log(Days.Monday); // Вывод => 0

enum Months {
	September = 'My Birthday',
	Ocotober = 'My Daughter Brithday',
	November = 11,
}
console.log(Months.September); // Вывод => 'My Birthday'

function infinite(): never {
	while (true) {
		console.log('infinite func');
	}
}

interface Rect {
	readonly id: number
	width: number
	height: number
	color?: string
}
class Square implements Rect {
	readonly id: number = 1
	readonly width: number
	readonly height: number
	constructor(
		color?: string // тоже самое что указать в {this.color: string = color}
	) { }
}
let someSquare = new Square('blue')

class Animal {
	protected voice: string = ''
	public color: string = 'black'
	private go() {
		console.log('Go');

	}
}
class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice
	}
}
let someCat = new Cat()
someCat.setVoice('meow')