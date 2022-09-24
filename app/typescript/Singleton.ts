export class Singleton {
	public static instance: Singleton
	private constructor() { }
	static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton()
		}
		return Singleton.instance
	}
}
let singleton1 = Singleton.getInstance()