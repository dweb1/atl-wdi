console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
	constructor (name) {
		this.foodInTummy = 10;
		this.restedness = 10;
		this.health = 10;
		this.name = name;		
	}
	cry() {
		this.foodInTummy --;
		console.log(this.foodInTummy);
		console.log("WAHH!");
	}
} 

// var bill = new Tamagotchi("Bill");
// console.log(bill);
// bill.cry();
// bill.cry();
// bill.cry();
// console.log(bill);

//create new Tamagotchis


//test out your Tamagotchies below via console.logs
