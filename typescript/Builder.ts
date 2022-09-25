export abstract class AbstractHouse {

	public doors: number
	public windows: number
	public rooms: string[]
	public garage?: boolean

}
export class House {
	constructor(
		public doors: number = 3,
		public windows: number = 3,
		public rooms: string[] = ['parents', 'children']
	) { }
}
export class HouseBuilder {
	public house: AbstractHouse
	constructor() {
		this.house = new House()
	}
	setDoor(amount: number) {
		this.house.doors = amount
		return this
	}
	setWindows(amount: number) {
		this.house.windows = amount
		return this
	}
	setRooms(rooms: string[]) {
		this.house.rooms = rooms
		return this
	}
	setGarage() {
		this.house.garage = true
		return this
	}
	build() {
		return this.house
	}
}
let house1 = new House()
let house2 = new HouseBuilder().setDoor(2).setWindows(5).setRooms(['its studio apartment']).setGarage().build()
let house3 = new HouseBuilder().build()
console.log(house1);
console.log(house2);
console.log(house3);


