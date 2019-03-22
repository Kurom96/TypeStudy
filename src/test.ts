import Person from './Class/Person';

const examinations: string[] = process.argv.slice(2);

// Basic
if (examinations.includes("basic")) {
	const hello = (name: string): string => `Hello, ${name}!`;
	console.log(hello("Taro"));
}


// Class
if (examinations.includes("class")) {
	const jiro = new Person("Jiro", 12);
	console.log(jiro.greet());

	const sabro = new Person("Sabro", 10);
	const helloPerson = (person: Person) => console.log(person.greet());

	helloPerson(sabro);	
}
