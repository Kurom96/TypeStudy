import Person from './Class/Person';
import Car from './Interface/Car';

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

  // union 型
  const val1: string | number = "aiueo";
  const val2: string | number = 12345;
  // const val3: string | number = true;  // エラー

  // リテラル型
  const foo: "foo" = "foo";
  const bar = "bar";	// 型推論で"bar"型
  let bar2 = "bar2";	// 型推論でstring型（letで再代入の可能性があるから）
  console.log(foo, bar, bar2);

  const hello = (name: "foo" | "bar") : string => `Hello ${name}!!!!!!`;
  console.log(hello(foo));

  // 配列型
  const nums: number[] = [0, 1, 2];
  nums.push(3);
  console.log(nums);

  // ジェネリクス
  const nums2: Array<number> = [3, 4, 5];
  console.log(nums2);

  // 関数型
  type func = (arg1: string, arg2: number) => string;
  const f: func = (arg1, arg2) => `${arg1} => ${arg2}`;
  console.log(f("ほげ", 999));
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
  const hereWeCar = (car: Car): string => `${car.owner.name}'s car is made in ${car.made}. \nThat's ${car.type} type!!`;

  const shiro = new Person("Shiro", 18);
  const shiroCar: Car = {
    owner: shiro,
    made: 1998,
    type: "sports",
    // handle: "left"  // エラー
  };

  console.log(hereWeCar(shiroCar));
}


// implements
if (examinations.includes("implements")) {
  class OpenCar implements Car {
    owner: Person;
    made: number;
    type: string = "open";

    constructor(owner: Person, made: number) {
      this.owner = owner;
      this.made = made;
    }

    hereWeCar(): string {
      return `${this.owner.name}'s car is made in ${this.made}. \nThat's ${this.type} type!!`
    }
  }

  const goro = new Person("Goro", 56);
  const openCar = new OpenCar(goro, 1986);

  console.log(openCar.hereWeCar());
}
