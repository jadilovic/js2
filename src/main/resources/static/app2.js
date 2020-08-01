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