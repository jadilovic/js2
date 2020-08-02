let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
	btn.addEventListener("click", function(e){
		const styles = e.currentTarget.classList;
		if(styles.contains("decrease")){
			count--;
		} else if(styles.contains("increase")){
			count++;
		} else if(styles.contains("reset")){
			count = 0;
		}
		
		if(count > 0){
			value.style.color = "green";
		} if(count < 0){
			value.style.color = "red";
		} if(count === 0) {
			value.style.color = "#222"
		}
		value.textContent = count;
	})
})

const list = ["a", "b", "c"];

let i = 0;

while(i < list.length){
	console.log(list[i]);
	console.log(i);
	i++;
}

for(const x of list){
	console.log(x);
}

const car = {
		  brand: {
		    name: 'Ford'
		  },
		  color: 'blue'
		}
console.log(car.brand.name);

car.brand.name = "VW";

console.log(car.brand.name);

console.log(car);

const car2 = {
		brand: "Opel",
		model: "Corsa",
		start: function(){
			console.log('Started ${this.brand} ${this.model}');
		}
	}

car2.start();

const car3 = {
		brand: "Toyota",
		model: "Corolla",
		goTo: function(destination){
			console.log('Going to ${destination}');
		}
	}

car3.goTo("Rome");

console.log(car3.brand);

class Person{
	hello(){
		return "Hello I am Florian";
	}
}

const person = new Person();
person.hello();

console.log(person.hello());


class Person1{
	
	constructor(name){
		this.name = name;
	}
	
	hello(){
		return "Hello I am " + this.name + ".";
	}
	
}

const person1 = new Person1("Jasmin");
person1.hello();

console.log(person1.hello());


class Person2 {
	static genericHello(){
		return "Hello Person";
	}
}
const person2 = new Person2();

console.log(Person2.genericHello());

class Programer extends Person {
	hellop(){
		return super.hello() + " and Programer";
	}
}

//console.log(Programer.hello());

const prog = new Programer();

console.log(prog.hellop());

console.log("before");

setTimeout(() => {
	// runs after 2 seconds
	console.log("inside the function");
}, 2000)

console.log("after");

const doSomething = new Promise(
		  (resolve, reject) => {
		    //some code
		    const success = "100";
		    if (success) {
		      resolve(console.log('ok'))
		    } else {
		      reject(console.log('this error occurred'))
		    }
		  }
		)