export class Prototype {
	constructor(
		public name: string,
		public age: number,
		public experience: number
	) { }

	getClone(): Prototype {
		return new Prototype(this.name, this.age, this.experience)
	}
}
let prototype1 = new Prototype('Maksym', 30, 1)
let clone = prototype1.getClone()

