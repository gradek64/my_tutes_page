class Person {
	constructor(name,height){
		this.name = name;
		this.height = height
	}

	greet() {
		console.log(`hi my name is ${this.name} and I am ${this.height} tall`);
	}
}

export default Person;