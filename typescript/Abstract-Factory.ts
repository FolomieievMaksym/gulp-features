export abstract class AbstractTeacher {
	name: string
	expirience: number | string
}
export abstract class AbstractChild {
	name: string
	age: number | string
}
export abstract class AbstractSchool {
	abstract createTeacher(name: string, expirience: number | string): AbstractTeacher
	abstract createChild(name: string, age: number | string): AbstractChild
}
export class TeacherFromSchool1 extends AbstractTeacher {
	constructor(name: string, expirience: number | string) {
		super()
		this.name = name
		this.expirience = expirience
	}
}
export class TeacherFromSchool2 extends AbstractTeacher {
	constructor(name: string, expirience: number | string) {
		super()
		this.name = name
		this.expirience = expirience
	}
}
export class ChildFromSchool1 extends AbstractChild {
	constructor(name: string, age: number | string) {
		super()
		this.name = name
		this.age = age
	}
}
export class ChildFromSchool2 extends AbstractChild {
	constructor(name: string, age: number | string) {
		super()
		this.name = name
		this.age = age
	}
}

export class School1 extends AbstractSchool {
	createTeacher(name: string, expirience: number | string): AbstractTeacher {
		return new TeacherFromSchool1(name, expirience)
	}
	createChild(name: string, age: number | string): AbstractChild {
		return new ChildFromSchool1(name, age)
	}
}
export class School2 extends AbstractSchool {
	createTeacher(name: string, expirience: number | string): AbstractTeacher {
		return new TeacherFromSchool2(name, expirience)
	}
	createChild(name: string, age: number | string): AbstractChild {
		return new ChildFromSchool2(name, age)
	}
}
export class CitySchool {
	private teachers: AbstractTeacher[] = []
	private children: AbstractChild[] = []
	constructor(private school: AbstractSchool) {
		this.school = school
	}
	createSchool(): void {
		this.teachers.push(this.school.createTeacher('Maria', 10))
		this.teachers.push(this.school.createTeacher('Olga', 8))
		this.children.push(this.school.createChild('Alex', 7))
	}
	hireTeacher(name: string, expirience: number | string): void {
		this.teachers.push(this.school.createTeacher(name, expirience))
	}
	admitChild(name: string, age: number | string): void {
		this.children.push(this.school.createChild(name, age))
	}
}
const citySchool1 = new CitySchool(new School1)
citySchool1.createSchool()
citySchool1.hireTeacher('Pavel', '2 years of experience')
citySchool1.admitChild('Anton', '9 years old')
citySchool1.admitChild('Igor', 10)
console.log(citySchool1);

const citySchool2 = new CitySchool(new School2)
citySchool2.createSchool()
console.log(citySchool2);

// Builder
export class VillageSchool {
	private school: AbstractSchool
	private teachers: AbstractTeacher[] = []
	private children: AbstractChild[] = []
	constructor(school: AbstractSchool) {
		this.school = school
	}
	createSchool(): this {
		this.teachers.push(this.school.createTeacher('Maria', 10))
		this.teachers.push(this.school.createTeacher('Olga', 8))
		this.children.push(this.school.createChild('Alex', 7))
		return this
	}
	hireTeacher(name: string, expirience: number | string): this {
		this.teachers.push(this.school.createTeacher(name, expirience))
		return this
	}
	admitChild(name: string, age: number | string): this {
		this.children.push(this.school.createChild(name, age))
		return this
	}
	build() {
		return this
	}
}
const villageSchool = new VillageSchool(new School1)
	.admitChild('Alex', 10)
	.admitChild('Maksym', '7 years old')
	.hireTeacher('Oleg', 13)
	.hireTeacher('Pavel', '2 years of experience')
	.build()
console.log(villageSchool);