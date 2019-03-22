import Person from './Class/Person';

const examinations: string[] = process.argv.slice(2).map(val => val.toLowerCase());

// Basic
if (examinations.includes("basic")) {
	const hello = (name: string): string => `Hello, ${name}!`;
	console.log(hello("Taro"));
}


// Types
if (examinations.includes("types")) {
	// プリミティブ型
	const str: string = "もじれつ";
	const num: number = 123;
	const bol: boolean = true;
	const sym: symbol = Symbol("symbol");
	const n: null = null;
	const u: undefined = undefined;
	console.log(str, num, bol, sym, n, u);

	// リテラル型
	const foo: "foo" = "foo";
	const bar = "bar";	// 型推論で"bar"型
	let bar2 = "bar2";	// 型推論でstring型（letで再代入の可能性があるから）
	console.log(foo, bar, bar2);

	// 配列型
	const nums: number[] = [0, 1, 2];
	nums.push(3);
	console.log(nums);

	// 関数型
	const fnc: (arg1: string, arg2: number) => string = (arg1, arg2) => `${arg1} => ${arg2}`;
	console.log(fnc("ほげ", 999));
}


// Class
if (examinations.includes("class")) {
	const jiro = new Person("Jiro", 12);
	console.log(jiro.greet());

	const sabro = new Person("Sabro", 10);
	const helloPerson = (person: Person) => console.log(person.greet());

	helloPerson(sabro);	
}

// interface
if (examinations.includes("interface")) {
	interface Car {
		owner: Person,
		made: number,
		type: string
	}

	const hereWeCar = (car: Car): string => `${car.owner.name}'s car is made in ${car.made}. \nThat's ${car.type} type!!`;

	const shiro = new Person("Shiro", 18);
	const shiroCar = {
		owner: shiro,
		made: 1998,
		type: "Sports"
	};
	console.log(hereWeCar(shiroCar));
}

// implements
if (examinations.includes("implements")) {
	interface Car {
		owner: Person,
		made: number,
		type: string
	};

	class OpenCar implements Car {
		owner: Person;
		made: number;
		type: string = "OpenCar";

		constructor(owner: Person, made: number) {
			this.owner = owner;
			this.made = made;
		}

		introduce(): string {
			return `This ${this.type}'s owner is ${this.owner.name}! since ${this.made}.`;
		}
	};

	const goro = new Person("Goro", 56);
	const openCar = new OpenCar(goro, 1986);

	console.log(openCar.introduce());
}
