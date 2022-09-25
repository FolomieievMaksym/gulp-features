interface Dishes {
	name: string
	price: number
	alergy: boolean
}
class Pizza implements Dishes {
	name: string
	price: number
	alergy: boolean
	ingridients: string[]
	constructor() {
		this.name = 'Pizza with Ham'
		this.price = 140
		this.alergy = true
		this.ingridients = ['Ham, garlic, sauce, cheese']
	}
}
class Pasta implements Dishes {
	name: string
	price: number
	alergy: boolean
	ingridients: string[]
	constructor() {
		this.name = 'Pasta Carbonara'
		this.price = 140
		this.alergy = true
		this.ingridients = ['Bacon, garlic, eggs, wine, cheese']
	}
}
class Borsch implements Dishes {
	name: string = 'Борщец'
	price: number = 70
	alergy: boolean = false
	constructor() { }
}
class Varenik implements Dishes {
	name: string = 'Варенички'
	price: number = 70
	alergy: boolean = false
	constructor() { }
}
abstract class Chef {
	abstract cook(name: string): Dishes
}
class ItalianChef extends Chef {
	constructor() {
		super()
	}
	cook(name: string): Dishes {
		console.log('Will return a different type than Dishes');
		if (name === 'Pizza') {
			return new Pizza()
		} else if (name === "Pasta") {
			return new Pasta()
		} else {
			throw new Error("we don't cook this stuff");
		}
	}
}
class UkrainianChef extends Chef {
	constructor() {
		super()
	}
	cook(name: string): Dishes {
		console.log('Will return type Dishes');
		if (name === 'Borsch') {
			return new Borsch()
		} else if (name === "Varenik") {
			return new Varenik()
		} else {
			throw new Error("we don't cook this stuff");
		}
	}
}
class Restaurant {
	public chef: Chef
	constructor(chef: Chef) {
		this.chef = chef
	}
	cook(name: string): Dishes {
		return this.chef.cook(name)
	}
}
let rest1 = new Restaurant(new ItalianChef())
console.log(rest1);
console.log(rest1.chef);
let food1 = rest1.cook('Pizza')
console.log(food1);
console.log('---------------------------');
let rest2 = new Restaurant(new UkrainianChef())
console.log(rest2);
console.log(rest2.chef);
let food2 = rest2.cook('Borsch')
console.log(food2);
