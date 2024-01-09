// type AddFn = (a: number, b: number) => number

interface AddFn {
    (a: number, b: number): number
}

let add: AddFn

add = (n1: number, n2: number) => {
    return n1 + n2
}

console.log(add(1, 2))

interface WelcomeMessage {
    name: string;

    greet(phrase: string): void
}

class Person implements WelcomeMessage {
    name: string;
    age: number;
    address: string;

    constructor(n: string, age: number, address: string) {
        this.name = n;
        this.age = age;
        this.address = address;
    }

    greet(phrase: string) {
        console.log("Hello " + user1.name + " " + phrase);
    }
}

let user1: WelcomeMessage;

user1 = new Person("Emmanuel", 27, "3 Ezekwesili Cresent, Enugu")
user1.greet("we welcome you with Jesus joy")