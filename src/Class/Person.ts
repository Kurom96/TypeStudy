export default class Person {
	name: string;
	age: number;

	constructor(name:string, age:number) {
		this.name = name;
		this.age = age;
	};

	greet(): string {
		return `Hello, ${this.name}! You are ${this.age} years old!`;
	};
};