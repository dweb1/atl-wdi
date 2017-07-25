console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
	constructor (name, creatureType) {
		this.foodInTummy = 10;
		this.restedness = 10;
		this.health = 10;
		this.name = name;
		this.creatureType = creatureType		
	}
	cry() {
		this.foodInTummy --;
		console.log(this.foodInTummy);
		console.log("WAHH!" + "- " + this.name);
	}
	puke() {
		this.foodInTummy--;
		console.log("Waaaaaah - " + this.name + " is sick and has " + this.foodInTummy + " food in his tummy");
	}
	yawn() {
		this.restedness--;
		console.log(this.name + " has current restedness of: " + this.restedness);
	}
} 

//create new Tamagotchis
const bill = new Tamagotchi("Bill", "lizard");
bill.puke();
bill.yawn();

const steve = new Tamagotchi("Steve", "zebra");
steve.puke();
steve.yawn();

const earl = new Tamagotchi("Earl", "possum");
earl.puke();
earl.yawn();

//test out your Tamagotchies below via console.logs
